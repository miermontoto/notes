module.exports = function(eleventyConfig) {
	let markdownIt = require("markdown-it");
	let markdownItObsidian = require("markdown-it-obsidian")();
	let markdownItOptions = {
		html: true
	};
	let markdownLib = markdownIt(markdownItOptions).use(markdownItObsidian);
	eleventyConfig.setLibrary("md", markdownLib);

	return {
		markdownTemplateEngine: false,
		dir: {
			input: "."
		}
	};
}
