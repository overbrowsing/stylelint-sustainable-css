### Avoid Overly Specific Selectors

**Guideline:** Avoid unnecessary specificity in selectors.

```css
/* Instead of this */
div#content > p.intro { ... }

/* Use this */
.intro { ... }
```

### Target Attribute Selectors instead of Overly Specific Classes/IDs

**Guideline:** Use attribute selectors instead of class names for specific styling when appropriate, reducing the need for extra class definitions.

```css
/* Instead of this */
.element-with-long-name { ... }

/* Use this */
button[data-type="primary"] { ... }
```


