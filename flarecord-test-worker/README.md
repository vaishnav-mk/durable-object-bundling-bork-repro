# Minimal Wrangler Bug Reproduction

**Issue:** Wrangler bundler breaks `DurableObject` when importing modules from `discord.js`.

## The Bug

When a `DurableObject` class imports from a module that imports from `discord.js`, wrangler's bundler fails with:
```
Uncaught TypeError: Super expression must either be null or a function
```
<img width="1016" height="557" alt="image" src="https://github.com/user-attachments/assets/71de83c7-8ad7-44f2-bad0-0fdafe6adc19" />
