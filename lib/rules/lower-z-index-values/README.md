# Lower Unnecessary `z-index`

**Guideline:** Avoid using high `z-index` values unnecessarily.

```css
/* Instead of this */
.element {
  z-index: 9999;
}

/* Use this */
.element {
  z-index: 4;
}
```