## optimize-selectors

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

### Avoid Redundant Selectors

**Guideline:** Simplify selectors to reduce their length.

```css
/* Instead of this */
div.container > ul > li { ... }

/* Use this */
.container li { ... }
```

### Combine Selectors with Similar Styles

**Guideline:** When multiple selectors share the same style declarations, combine them into a single rule to reduce redundancy. Or even better make one single class!

```css
/* Instead of this */
.button {
  color: green;
  border: 1px solid green
}

.submit-button {
  color: green;
  border: 1px solid green
}

/* Use this */
.button, .submit-button {
  color: green;
  border: 1px solid green
}
```

### Use Variables for Repeated Values

**Guideline:** Use CSS variables for repeated values.

```css
/* Instead of this */
.header {
  font: 400 15px/1.5 courier, monospace
}

.footer {
  font: 400 15px/1.5 courier, monospace
}

/* Use this */
:root {
  --font-style-1: 400 15px/1.5 courier, monospace
}

.header {
  font: var(--font-style-1)
}

.footer {
  font: var(--font-style-1)
}
```

### Minimise Selector Depth

**Guideline:** Avoid overly specific or redundant selectors to reduce file size and improve readability.

```css
/* Instead of this */
.container > .header .title { ... }

/* Use this */
.title { ... }
```

### Use Shorter Selector Names

**Guideline:** When naming classes and IDs, choose short, descriptive names to improve readability and navigation in your CSS files. Aim for names under 10 - 14 characters.

```css
cssCopy code
/* Instead of this */
.element-with-long-name { ... }

/* Use this */
.element { ... }
```