```
acc 105 permit tcp any host 23.19.24.146 eq smtp
acc 110 permit tcp any host 23.19.24.148 eq www
acc 115 deny ip any 23.19.24.144 0.0.0.15
```