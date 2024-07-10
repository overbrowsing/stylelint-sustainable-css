# Using `em` vs `rem`

**Guideline:** Prefer using `em` units for sizing unless `rem` units are specifically necessary for consistency across the entire document. Saving one single character from the value by using `em`.

**Explanation:** `em` units are relative to the font size of the parent element, making them ideal for maintaining proportional scaling within nested elements. On the other hand, `rem` units are relative to the root (`html`) element's font size, providing a consistent base size across the entire document. Use `rem` when you need uniform scaling across different sections of your website, but remember that `rem` introduces an additional character in its value compared to `em`.

```css
/* Instead of this */
padding: 16px; /* Using absolute pixels */

/* Use this */
padding: 1em; /* Relative to parent element */

/* Or use this */
padding: 1rem; /* Relative to root element */
```