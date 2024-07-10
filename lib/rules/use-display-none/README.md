# Use `display: none` for Hiding Elements

**Guideline:** Use `display: none` instead of visibility or opacity to completely hide elements.

```css
/* Instead of this */
.hidden {
  visibility: hidden;
}

/* Use this */
.hidden {
  display: none;
}
```