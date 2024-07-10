# Use `inherit` and `initial` Wisely

**Guideline:** Use `inherit` and `initial` values to simplify style rules.

```css
/* Instead of this */
.child {
  color: #000
}

.parent .child {
  color: inherit;
}

/* Use this */
.parent .child {
  color: inherit;
}
```