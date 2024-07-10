# Inline Flexbox for Quick Alignments

**Guideline:** Use flexbox for simple alignments within a single container.

```css
/* Instead of this */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Use this */
.container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```