## no-vendor-prefixes

### Minimise Vendor Prefixes

**Guideline:** Use autoprefixers or browser support checks to avoid unnecessary vendor prefixes that add extra bytes to CSS files.

```css
/* Instead of this */
.element {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s
}

/* Use this */
.element {
  transition: all 0.3s
}
```