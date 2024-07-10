# CSS Grid for Complex Layouts

**Guideline:** Use CSS Grid for complex layout structures to simplify code.

```css
/* Instead of this */
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  width: 50%;
}

/* Use this */
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
```