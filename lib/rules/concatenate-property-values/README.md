# Concatenating Property Values

**Guideline:** Combine multiple CSS properties on a single line to reduce redundancy and improve readability.

```css
/* Instead of this */
.image {
  filter: grayscale(100%);
  filter: blur(5px);
}

/* Use this */
.image {
  filter: grayscale(100%) blur(5px);
}
```

### Combine Multiple of the Same Property Values

**Guideline:** Combine multiple CSS property values into a single line using a comma-separated list.

```css
/* Instead of this */
box-shadow: 1px 1px 2px #000;
box-shadow: inset 0 0 10px #000;

/* Use this */
box-shadow: 1px 1px 2px #000, inset 0 0 10px #000;
```