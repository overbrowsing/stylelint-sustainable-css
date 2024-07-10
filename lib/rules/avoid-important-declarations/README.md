# Avoid `!important` Declarations

**Guideline:** Minimise the use of `!important` to maintain CSS specificity and avoid overriding styles unnecessarily.

```css
/* Instead of this */
.footer {
  color: #000 !important;
}

/* Use this */
.footer {
  color: #000;
}
```