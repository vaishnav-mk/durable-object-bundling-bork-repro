# Minimal Wrangler Bug Reproduction

**Issue:** Wrangler bundler breaks `DurableObject` when importing modules that re-export from `discord.js`.

## The Bug

When a `DurableObject` class imports from a module that re-exports from `discord.js`, wrangler's bundler fails with:
```
Uncaught TypeError: Super expression must either be null or a function
```

## Files

- `src/durable-object.ts` - Simple DO that works ✅
- `src/broken-do.ts` - DO that imports from `minimal-module.ts` ❌
- `src/minimal-module.ts` - Re-exports from `discord.js` (like flarecord does)

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

- Visit `/do` - Works fine (simple DO)
- Visit `/broken` - Fails with error (DO importing re-exported discord.js)

## Root Cause

The issue is in wrangler's bundler. When it bundles code that:
1. Extends `DurableObject` from `"cloudflare:workers"`
2. Imports from a module that re-exports from `discord.js`

The bundler incorrectly resolves `DurableObject`, causing the super expression error.

This is why flarecord (which re-exports from discord.js) breaks DurableObject classes.

