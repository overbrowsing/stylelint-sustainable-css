### Combine Selectors

**Guideline:** Group selectors with the same styles.

```css
/* Instead of this */
h1 { ... }

h2 { ... }

/* Use this */
h1, h2 { ... }
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
  color: #fff;
  background: #007bff;
}
.submit-button {
  color: #fff;
  background: #007bff;
}

/* Use this */
.button, .submit-button {
  color: #fff;
  background: #007bff;
}
```

### Use Variables for Repeated Values

**Guideline:** Use CSS variables for repeated values.

```css
/* Instead of this */
.header {
  border: #000 1px solid;
}

.footer {
  border: #000 1px solid;
}

/* Use this */
:root {
  --border: #000 1px solid;
}

.header {
  border: var(--border);
}

.footer {
  border: var(--border);
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