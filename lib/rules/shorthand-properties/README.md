# Shorthand Properties

### Margin and Padding

**Guideline: I**nstead of `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`, use `margin: 10px 20px 30px 40px;` or `margin: 10px 20px;` if the top/bottom and left/right values are the same.

```css
/* Instead of this */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Use this */
margin: 10px 20px 30px 40px;
```

### Simplify Typography Using the `font` Shorthand Property

**Guideline:** Use the `font`  shorthand to specify font style, weight, size, line-height, and family.

```css
/* Instead of this */
font-family: Arial, sans-serif;
font-size: 12px;
font-weight: 700;
line-height: 1.4;

/* Use this */
font: 700 12px/1.6 Arial, sans-serif
```

### Simplify `border`

**Guideline:** Combine border width, style, and color in one line.

```css
/* Instead of this */
border-width: 1px;
border-style: solid;
border-color: #000;

/* Use this */
border: 1px solid #000;
```

### Optimise `text-decoration`

**Guideline:** Combine `text-decoration` properties.

```css
cssCopy code
/* Instead of this */
text-decoration-line: underline;
text-decoration-style: dotted;

/* Use this */
text-decoration: underline dotted;
```

### Simplify `background`

**Guideline:** Combine all background properties into one `background` property.

```css
/* Instead of this */
background-color: #fff;
background-image: url('image.png');
background-repeat: no-repeat;

/* Use this */
background: #fff url('image.png') no-repeat;
```

### Optimise `list-style`

**Guideline:** Combine `list-style` properties.

```css
/* Instead of this */
list-style-type: disc;
list-style-position: inside;

/* Use this */
list-style: disc inside;
```

### Use `overflow` Shorthand

**Guideline:** Combine `overflow` properties.

```css
/* Instead of this */
overflow-x: hidden;
overflow-y: scroll;

/* Use this */
overflow: hidden scroll;
```

### Use `flex` Shorthand

**Guideline:** Use the `flex` shorthand property.

```css
/* Instead of this */
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;

/* Use this */
flex: 1 1 auto;
```

### Use `grid` Shorthand

**Guideline:** Use the `grid` shorthand property.

```css
/* Instead of this */
grid-template-rows: 1fr;
grid-template-columns: 1fr;

/* Use this */
grid: 1fr / 1fr;
```

### Combine `place-items`

**Guideline:** Use `place-items` in grid or flex layouts.

```css
/* Instead of this */
align-items: center;
justify-items: center;

/* Use this */
place-items: center;
```

### Use `gap` in Grid and Flexbox

**Guideline:** Use the `gap` property to simplify spacing.

```css
/* Instead of this */
grid-gap: 10px;
column-gap: 10px;
row-gap: 10px;

/* Use this */
gap: 10px;
```

### Use Shorter Animations

**Guideline:** Use shorter animation and transition syntax.

```css
/* Instead of this */
transition-property: all;
transition-duration: 0.3s;

/* Use this */
transition: all 0.3s;
```

### Use `columns` Shorthand

**Guideline:** Combine column properties using the `columns` shorthand.

```css
/* Instead of this */
column-width: 200px;
column-count: 3;

/* Use this */
columns: 200px 3;
```