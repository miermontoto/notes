var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => ScrollSpeed
});
var import_obsidian = __toModule(require("obsidian"));
var DEFAULT_SETTINGS = {
  speed: 5,
  altMultiplier: 5,
  enableAnimations: true
};
var ScrollSpeed = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.animationSmoothness = 3;
    this.positionY = 0;
    this.isMoving = false;
    this.scrollDistance = 0;
    this.windowOpenListener = (_win, window2) => {
      this.registerDomEvent(window2, "wheel", this.scrollListener, { passive: false });
    };
    this.scrollListener = (event) => {
      event.preventDefault();
      const path = event.path || event.composedPath && event.composedPath();
      for (const element of path) {
        if (this.isScrollable(element, event)) {
          this.target = element;
          if (this.isTrackPadUsed(event) || !this.settings.enableAnimations) {
            this.scrollWithoutAnimation(event);
          } else {
            this.scrollWithAnimation(event);
          }
          break;
        }
      }
    };
  }
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      this.addSettingTab(new SettingsTab(this.app, this));
      this.registerDomEvent(window, "wheel", this.scrollListener, { passive: false });
      this.registerEvent(this.app.on("window-open", this.windowOpenListener));
    });
  }
  scrollWithoutAnimation(event) {
    const acceleration = event.altKey ? this.settings.speed * this.settings.altMultiplier : this.settings.speed;
    this.target.scrollBy(event.deltaX * acceleration, event.deltaY * acceleration);
  }
  scrollWithAnimation(event) {
    if (!this.isMoving) {
      this.positionY = this.target.scrollTop;
    }
    const acceleration = event.altKey ? Math.pow(this.settings.speed * this.settings.altMultiplier, 1.1) : Math.pow(this.settings.speed, 1.1);
    this.positionY += event.deltaY * acceleration;
    this.scrollDistance = event.deltaY * acceleration;
    this.positionY = Math.max(0, Math.min(this.positionY, this.target.scrollHeight - this.target.clientHeight));
    if (!this.isMoving) {
      this.isMoving = true;
      this.updateScrollAnimation();
    }
  }
  updateScrollAnimation() {
    if (!this.isMoving || !this.target) {
      return this.stopScrollAnimation();
    }
    const divider = Math.pow(this.animationSmoothness, 1.3);
    const delta = this.positionY - this.target.scrollTop;
    this.target.scrollTop += delta / divider;
    if (delta < 0 && this.positionY < 0 && this.target.scrollTop === 0) {
      return this.stopScrollAnimation();
    }
    if (delta > 0 && this.positionY > this.target.scrollHeight - this.target.clientHeight / 2 - this.scrollDistance) {
      return this.stopScrollAnimation();
    }
    if (Math.abs(delta) < this.scrollDistance * 0.015 || Math.abs(delta / divider) < 1) {
      return this.stopScrollAnimation();
    }
    window.requestAnimationFrame(this.updateScrollAnimation.bind(this));
  }
  stopScrollAnimation() {
    this.isMoving = false;
    this.scrollDistance = 0;
    this.positionY = this.target.scrollTop;
    if (this.target)
      this.target = void 0;
  }
  isScrollable(element, event) {
    const isHorizontal = event.deltaX && !event.deltaY;
    return this.isContentOverflowing(element, isHorizontal) && this.hasOverflowStyle(element, isHorizontal);
  }
  isContentOverflowing(element, horizontal) {
    const client = horizontal ? element.clientWidth : element.clientHeight;
    const scroll = horizontal ? element.scrollWidth : element.scrollHeight;
    return client < scroll;
  }
  hasOverflowStyle(element, horizontal) {
    const style = getComputedStyle(element);
    const overflow = style.getPropertyValue(horizontal ? "overflow-x" : "overflow-y");
    return /^(scroll|auto)$/.test(overflow);
  }
  isTrackPadUsed(event) {
    let isTrackPad = false;
    if (event.wheelDeltaY) {
      if (event.wheelDeltaY === event.deltaY * -3) {
        isTrackPad = true;
      }
    } else if (event.deltaMode === 0) {
      isTrackPad = true;
    }
    return isTrackPad;
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var SettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    let speedSlider;
    new import_obsidian.Setting(containerEl).setName("Mouse Scroll Speed").setDesc("1 is the default scroll speed, higher is faster").addExtraButton((button) => {
      button.setIcon("reset").setTooltip("Restore default").onClick(() => __async(this, null, function* () {
        this.plugin.settings.speed = DEFAULT_SETTINGS.speed;
        speedSlider.setValue(DEFAULT_SETTINGS.speed);
        yield this.plugin.saveSettings();
      }));
    }).addSlider((slider) => {
      speedSlider = slider;
      slider.setValue(this.plugin.settings.speed).setLimits(1, 10, 1).setDynamicTooltip().onChange((value) => __async(this, null, function* () {
        this.plugin.settings.speed = value;
        yield this.plugin.saveSettings();
      }));
    });
    let altMultiplierSlider;
    new import_obsidian.Setting(containerEl).setName("Alt Multiplier").setDesc("Multiply scroll speed when the ALT key is pressed").addExtraButton((button) => {
      button.setIcon("reset").setTooltip("Restore default").onClick(() => __async(this, null, function* () {
        this.plugin.settings.altMultiplier = DEFAULT_SETTINGS.altMultiplier;
        altMultiplierSlider.setValue(DEFAULT_SETTINGS.altMultiplier);
        yield this.plugin.saveSettings();
      }));
    }).addSlider((slider) => {
      altMultiplierSlider = slider;
      slider.setValue(this.plugin.settings.altMultiplier).setLimits(1, 10, 1).setDynamicTooltip().onChange((value) => __async(this, null, function* () {
        this.plugin.settings.altMultiplier = value;
        yield this.plugin.saveSettings();
      }));
    });
    let animationToggle;
    new import_obsidian.Setting(containerEl).setName("Enable Animation").setDesc("Toggle smooth scrolling animations").addExtraButton((button) => {
      button.setIcon("reset").setTooltip("Restore default").onClick(() => __async(this, null, function* () {
        this.plugin.settings.enableAnimations = DEFAULT_SETTINGS.enableAnimations;
        animationToggle.setValue(DEFAULT_SETTINGS.enableAnimations);
        yield this.plugin.saveSettings();
      }));
    }).addToggle((toggle) => {
      animationToggle = toggle;
      toggle.setValue(this.plugin.settings.enableAnimations).onChange((value) => __async(this, null, function* () {
        this.plugin.settings.enableAnimations = value;
        yield this.plugin.saveSettings();
      }));
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcclxuICBBcHAsXHJcbiAgUGx1Z2luLFxyXG4gIFBsdWdpblNldHRpbmdUYWIsXHJcbiAgU2V0dGluZyxcclxuICBTbGlkZXJDb21wb25lbnQsXHJcbiAgVG9nZ2xlQ29tcG9uZW50LFxyXG4gIFdvcmtzcGFjZVdpbmRvdyxcclxufSBmcm9tICdvYnNpZGlhbidcclxuXHJcbmludGVyZmFjZSBBdWdtZW50ZWRXaGVlbEV2ZW50IGV4dGVuZHMgV2hlZWxFdmVudCB7XHJcbiAgcGF0aDogRWxlbWVudFtdXHJcbiAgd2hlZWxEZWx0YVk6IG51bWJlclxyXG4gIHdoZWVsRGVsdGFYOiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuICBzcGVlZDogbnVtYmVyXHJcbiAgYWx0TXVsdGlwbGllcjogbnVtYmVyXHJcbiAgZW5hYmxlQW5pbWF0aW9uczogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBTZXR0aW5ncyA9IHtcclxuICBzcGVlZDogNSxcclxuICBhbHRNdWx0aXBsaWVyOiA1LFxyXG4gIGVuYWJsZUFuaW1hdGlvbnM6IHRydWUsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFNwZWVkIGV4dGVuZHMgUGx1Z2luIHtcclxuICBzZXR0aW5nczogU2V0dGluZ3NcclxuXHJcbiAgYW5pbWF0aW9uU21vb3RobmVzcyA9IDNcclxuICBwb3NpdGlvblkgPSAwXHJcbiAgaXNNb3ZpbmcgPSBmYWxzZVxyXG4gIHRhcmdldDogRWxlbWVudCB8IHVuZGVmaW5lZFxyXG4gIHNjcm9sbERpc3RhbmNlID0gMFxyXG5cclxuICBhc3luYyBvbmxvYWQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpXHJcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IFNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSlcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyRG9tRXZlbnQod2luZG93LCAnd2hlZWwnLCB0aGlzLnNjcm9sbExpc3RlbmVyLCB7cGFzc2l2ZTogZmFsc2V9KVxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC5vbignd2luZG93LW9wZW4nLCB0aGlzLndpbmRvd09wZW5MaXN0ZW5lcikpXHJcbiAgfVxyXG5cclxuICB3aW5kb3dPcGVuTGlzdGVuZXIgPSAoX3dpbjogV29ya3NwYWNlV2luZG93LCB3aW5kb3c6IFdpbmRvdykgPT4ge1xyXG4gICAgdGhpcy5yZWdpc3RlckRvbUV2ZW50KHdpbmRvdywgJ3doZWVsJywgdGhpcy5zY3JvbGxMaXN0ZW5lciwge3Bhc3NpdmU6IGZhbHNlfSlcclxuICB9XHJcblxyXG4gIHNjcm9sbExpc3RlbmVyID0gKGV2ZW50OiBBdWdtZW50ZWRXaGVlbEV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5MjQ1NjM4Lzg1ODY4MDNcclxuICAgIGNvbnN0IHBhdGggPSBldmVudC5wYXRoIHx8IChldmVudC5jb21wb3NlZFBhdGggJiYgKGV2ZW50LmNvbXBvc2VkUGF0aCgpIGFzIEVsZW1lbnRbXSkpXHJcblxyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHBhdGgpIHtcclxuICAgICAgaWYgKHRoaXMuaXNTY3JvbGxhYmxlKGVsZW1lbnQsIGV2ZW50KSkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZWxlbWVudFxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1RyYWNrUGFkVXNlZChldmVudCkgfHwgIXRoaXMuc2V0dGluZ3MuZW5hYmxlQW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxXaXRob3V0QW5pbWF0aW9uKGV2ZW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFdpdGhBbmltYXRpb24oZXZlbnQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxXaXRob3V0QW5pbWF0aW9uKGV2ZW50OiBBdWdtZW50ZWRXaGVlbEV2ZW50KSB7XHJcbiAgICBjb25zdCBhY2NlbGVyYXRpb24gPSBldmVudC5hbHRLZXlcclxuICAgICAgPyB0aGlzLnNldHRpbmdzLnNwZWVkICogdGhpcy5zZXR0aW5ncy5hbHRNdWx0aXBsaWVyXHJcbiAgICAgIDogdGhpcy5zZXR0aW5ncy5zcGVlZFxyXG5cclxuICAgIHRoaXMudGFyZ2V0LnNjcm9sbEJ5KGV2ZW50LmRlbHRhWCAqIGFjY2VsZXJhdGlvbiwgZXZlbnQuZGVsdGFZICogYWNjZWxlcmF0aW9uKVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsV2l0aEFuaW1hdGlvbihldmVudDogQXVnbWVudGVkV2hlZWxFdmVudCkge1xyXG4gICAgLy8gVE9ETyBob3Jpem9udGFsIHNjcm9sbGluZywgdG9vXHJcbiAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvblkgPSB0aGlzLnRhcmdldC5zY3JvbGxUb3BcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NlbGVyYXRpb24gPSBldmVudC5hbHRLZXlcclxuICAgICAgPyBNYXRoLnBvdyh0aGlzLnNldHRpbmdzLnNwZWVkICogdGhpcy5zZXR0aW5ncy5hbHRNdWx0aXBsaWVyLCAxLjEpXHJcbiAgICAgIDogTWF0aC5wb3codGhpcy5zZXR0aW5ncy5zcGVlZCwgMS4xKVxyXG5cclxuICAgIHRoaXMucG9zaXRpb25ZICs9IGV2ZW50LmRlbHRhWSAqIGFjY2VsZXJhdGlvblxyXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZSA9IGV2ZW50LmRlbHRhWSAqIGFjY2VsZXJhdGlvblxyXG4gICAgdGhpcy5wb3NpdGlvblkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uWSwgdGhpcy50YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gdGhpcy50YXJnZXQuY2xpZW50SGVpZ2h0KSlcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcclxuICAgICAgdGhpcy5pc01vdmluZyA9IHRydWVcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU2Nyb2xsQW5pbWF0aW9uKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcm9sbEFuaW1hdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pc01vdmluZyB8fCAhdGhpcy50YXJnZXQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGl2aWRlciA9IE1hdGgucG93KHRoaXMuYW5pbWF0aW9uU21vb3RobmVzcywgMS4zKVxyXG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLnBvc2l0aW9uWSAtIHRoaXMudGFyZ2V0LnNjcm9sbFRvcFxyXG4gICAgdGhpcy50YXJnZXQuc2Nyb2xsVG9wICs9IGRlbHRhIC8gZGl2aWRlclxyXG5cclxuICAgIC8vIEJvdW5kYXJ5IGF0IHRoZSB0b3BcclxuICAgIGlmIChkZWx0YSA8IDAgJiYgdGhpcy5wb3NpdGlvblkgPCAwICYmIHRoaXMudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBCb3VuZGFyeSBhdCB0aGUgYm90dG9tXHJcbiAgICBpZiAoXHJcbiAgICAgIGRlbHRhID4gMCAmJlxyXG4gICAgICB0aGlzLnBvc2l0aW9uWSA+IHRoaXMudGFyZ2V0LnNjcm9sbEhlaWdodCAtIHRoaXMudGFyZ2V0LmNsaWVudEhlaWdodCAvIDIgLSB0aGlzLnNjcm9sbERpc3RhbmNlXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RvcCB3aGVuIG1vdmVtZW50IGRlbHRhIGlzIGFwcHJvYWNoaW5nIHplcm9cclxuICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPCB0aGlzLnNjcm9sbERpc3RhbmNlICogMC4wMTUgfHwgTWF0aC5hYnMoZGVsdGEgLyBkaXZpZGVyKSA8IDEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVNjcm9sbEFuaW1hdGlvbi5iaW5kKHRoaXMpKVxyXG4gIH1cclxuXHJcbiAgc3RvcFNjcm9sbEFuaW1hdGlvbigpIHtcclxuICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZVxyXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZSA9IDBcclxuICAgIHRoaXMucG9zaXRpb25ZID0gdGhpcy50YXJnZXQuc2Nyb2xsVG9wXHJcbiAgICBpZiAodGhpcy50YXJnZXQpIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICBpc1Njcm9sbGFibGUoZWxlbWVudDogRWxlbWVudCwgZXZlbnQ6IEF1Z21lbnRlZFdoZWVsRXZlbnQpIHtcclxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGV2ZW50LmRlbHRhWCAmJiAhZXZlbnQuZGVsdGFZXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc0NvbnRlbnRPdmVyZmxvd2luZyhlbGVtZW50LCBpc0hvcml6b250YWwpICYmXHJcbiAgICAgIHRoaXMuaGFzT3ZlcmZsb3dTdHlsZShlbGVtZW50LCBpc0hvcml6b250YWwpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBpc0NvbnRlbnRPdmVyZmxvd2luZyhlbGVtZW50OiBFbGVtZW50LCBob3Jpem9udGFsOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBob3Jpem9udGFsID8gZWxlbWVudC5jbGllbnRXaWR0aCA6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICBjb25zdCBzY3JvbGwgPSBob3Jpem9udGFsID8gZWxlbWVudC5zY3JvbGxXaWR0aCA6IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICByZXR1cm4gY2xpZW50IDwgc2Nyb2xsXHJcbiAgfVxyXG5cclxuICBoYXNPdmVyZmxvd1N0eWxlKGVsZW1lbnQ6IEVsZW1lbnQsIGhvcml6b250YWw6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxyXG4gICAgY29uc3Qgb3ZlcmZsb3cgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGhvcml6b250YWwgPyAnb3ZlcmZsb3cteCcgOiAnb3ZlcmZsb3cteScpXHJcbiAgICByZXR1cm4gL14oc2Nyb2xsfGF1dG8pJC8udGVzdChvdmVyZmxvdylcclxuICB9XHJcblxyXG4gIGlzVHJhY2tQYWRVc2VkKGV2ZW50OiBBdWdtZW50ZWRXaGVlbEV2ZW50KSB7XHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNjI0MTU3NTQvODU4NjgwM1xyXG5cclxuICAgIGxldCBpc1RyYWNrUGFkID0gZmFsc2VcclxuICAgIGlmIChldmVudC53aGVlbERlbHRhWSkge1xyXG4gICAgICBpZiAoZXZlbnQud2hlZWxEZWx0YVkgPT09IGV2ZW50LmRlbHRhWSAqIC0zKSB7XHJcbiAgICAgICAgaXNUcmFja1BhZCA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChldmVudC5kZWx0YU1vZGUgPT09IDApIHtcclxuICAgICAgaXNUcmFja1BhZCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNUcmFja1BhZFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncylcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcbiAgcGx1Z2luOiBTY3JvbGxTcGVlZFxyXG5cclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBTY3JvbGxTcGVlZCkge1xyXG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pXHJcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxyXG4gIH1cclxuXHJcbiAgZGlzcGxheSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHtjb250YWluZXJFbH0gPSB0aGlzXHJcbiAgICBjb250YWluZXJFbC5lbXB0eSgpXHJcblxyXG4gICAgbGV0IHNwZWVkU2xpZGVyOiBTbGlkZXJDb21wb25lbnRcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZSgnTW91c2UgU2Nyb2xsIFNwZWVkJylcclxuICAgICAgLnNldERlc2MoJzEgaXMgdGhlIGRlZmF1bHQgc2Nyb2xsIHNwZWVkLCBoaWdoZXIgaXMgZmFzdGVyJylcclxuICAgICAgLmFkZEV4dHJhQnV0dG9uKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAuc2V0SWNvbigncmVzZXQnKVxyXG4gICAgICAgICAgLnNldFRvb2x0aXAoJ1Jlc3RvcmUgZGVmYXVsdCcpXHJcbiAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNwZWVkID0gREVGQVVMVF9TRVRUSU5HUy5zcGVlZFxyXG4gICAgICAgICAgICBzcGVlZFNsaWRlci5zZXRWYWx1ZShERUZBVUxUX1NFVFRJTkdTLnNwZWVkKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgLmFkZFNsaWRlcihzbGlkZXIgPT4ge1xyXG4gICAgICAgIHNwZWVkU2xpZGVyID0gc2xpZGVyXHJcbiAgICAgICAgc2xpZGVyXHJcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc3BlZWQpXHJcbiAgICAgICAgICAuc2V0TGltaXRzKDEsIDEwLCAxKVxyXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcclxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNwZWVkID0gdmFsdWVcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgbGV0IGFsdE11bHRpcGxpZXJTbGlkZXI6IFNsaWRlckNvbXBvbmVudFxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKCdBbHQgTXVsdGlwbGllcicpXHJcbiAgICAgIC5zZXREZXNjKCdNdWx0aXBseSBzY3JvbGwgc3BlZWQgd2hlbiB0aGUgQUxUIGtleSBpcyBwcmVzc2VkJylcclxuICAgICAgLmFkZEV4dHJhQnV0dG9uKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAuc2V0SWNvbigncmVzZXQnKVxyXG4gICAgICAgICAgLnNldFRvb2x0aXAoJ1Jlc3RvcmUgZGVmYXVsdCcpXHJcbiAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFsdE11bHRpcGxpZXIgPSBERUZBVUxUX1NFVFRJTkdTLmFsdE11bHRpcGxpZXJcclxuICAgICAgICAgICAgYWx0TXVsdGlwbGllclNsaWRlci5zZXRWYWx1ZShERUZBVUxUX1NFVFRJTkdTLmFsdE11bHRpcGxpZXIpXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAuYWRkU2xpZGVyKHNsaWRlciA9PiB7XHJcbiAgICAgICAgYWx0TXVsdGlwbGllclNsaWRlciA9IHNsaWRlclxyXG4gICAgICAgIHNsaWRlclxyXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFsdE11bHRpcGxpZXIpXHJcbiAgICAgICAgICAuc2V0TGltaXRzKDEsIDEwLCAxKVxyXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcclxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFsdE11bHRpcGxpZXIgPSB2YWx1ZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICBsZXQgYW5pbWF0aW9uVG9nZ2xlOiBUb2dnbGVDb21wb25lbnRcclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZSgnRW5hYmxlIEFuaW1hdGlvbicpXHJcbiAgICAgIC5zZXREZXNjKCdUb2dnbGUgc21vb3RoIHNjcm9sbGluZyBhbmltYXRpb25zJylcclxuICAgICAgLmFkZEV4dHJhQnV0dG9uKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAuc2V0SWNvbigncmVzZXQnKVxyXG4gICAgICAgICAgLnNldFRvb2x0aXAoJ1Jlc3RvcmUgZGVmYXVsdCcpXHJcbiAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUFuaW1hdGlvbnMgPSBERUZBVUxUX1NFVFRJTkdTLmVuYWJsZUFuaW1hdGlvbnNcclxuICAgICAgICAgICAgYW5pbWF0aW9uVG9nZ2xlLnNldFZhbHVlKERFRkFVTFRfU0VUVElOR1MuZW5hYmxlQW5pbWF0aW9ucylcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHtcclxuICAgICAgICBhbmltYXRpb25Ub2dnbGUgPSB0b2dnbGVcclxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlQW5pbWF0aW9ucykub25DaGFuZ2UoYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlQW5pbWF0aW9ucyA9IHZhbHVlXHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVFPO0FBY1AsSUFBTSxtQkFBNkI7QUFBQSxFQUNqQyxPQUFPO0FBQUEsRUFDUCxlQUFlO0FBQUEsRUFDZixrQkFBa0I7QUFBQTtBQUdwQixnQ0FBeUMsdUJBQU87QUFBQSxFQUFoRCxjQTVCQTtBQTRCQTtBQUdFLCtCQUFzQjtBQUN0QixxQkFBWTtBQUNaLG9CQUFXO0FBRVgsMEJBQWlCO0FBWWpCLDhCQUFxQixDQUFDLE1BQXVCLFlBQW1CO0FBQzlELFdBQUssaUJBQWlCLFNBQVEsU0FBUyxLQUFLLGdCQUFnQixFQUFDLFNBQVM7QUFBQTtBQUd4RSwwQkFBaUIsQ0FBQyxVQUErQjtBQUMvQyxZQUFNO0FBR04sWUFBTSxPQUFPLE1BQU0sUUFBUyxNQUFNLGdCQUFpQixNQUFNO0FBRXpELGlCQUFXLFdBQVcsTUFBTTtBQUMxQixZQUFJLEtB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
