## shorten-properties

### Combine Multiple of the Same Property Values on a Single Line

**Guideline:** Combine multiple CSS properties on a single line to reduce redundancy and improve readability.

```css
/* Instead of this */
.image {
  filter: grayscale(100%);
  filter: blur(5px)
}

/* Use this */
.image {
  filter: grayscale(100%) blur(5px)
}
```

### Combine Multiple of the Same Property Values with a Comma-Separated List

**Guideline:** Combine multiple CSS property values into a single line using a comma-separated list.

```css
/* Instead of this */
.element {
  box-shadow: 1px 1px 2px #000;
  box-shadow: inset 0 0 10px #000
}

/* Use this */
.element {
  box-shadow: 1px 1px 2px #000, inset 0 0 10px #000
}
```

### Shorthand Properties

#### Margin and Padding

**Guideline:** Instead of `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`, use `margin: 10px 20px 30px 40px;` or `margin: 10px 20px;` if the top/bottom and left/right values are the same.

```css
/* Instead of this */
.margin-padding {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px
}

/* Use this */
.margin-padding {
  margin: 10px 20px 30px 40px
}
```

#### Simplify Typography Using the `font` Shorthand Property

**Guideline:** Use the `font`  shorthand to specify font style, weight, size, line-height, and family.

```css
/* Instead of this */
.font {
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4
}

/* Use this */
.font {
  font: 700 12px/1.6 Arial, sans-serif
}
```

#### Simplify `border`

**Guideline:** Combine border width, style, and color in one line.

```css
/* Instead of this */
.border {
  border-width: 1px;
  border-style: solid;
  border-color: #000
}

/* Use this */
.border {
  border: 1px solid #000;
}
```

#### Optimise `text-decoration`

**Guideline:** Combine `text-decoration` properties.

```css
cssCopy code
/* Instead of this */
.text-decor {
  text-decoration-line: underline;
  text-decoration-style: dotted
}

/* Use this */
.text-decor {
  text-decoration: underline dotted
}
```

#### Simplify `background`

**Guideline:** Combine all background properties into one `background` property.

```css
/* Instead of this */
.background {
  background-color: #fff;
  background-image: url('image.png');
  background-repeat: no-repeat
}

/* Use this */
.background {
  background: #fff url('image.png') no-repeat
}
```

#### Optimise `list-style`

**Guideline:** Combine `list-style` properties.

```css
/* Instead of this */
.list {
  list-style-type: disc;
  list-style-position: inside
}

/* Use this */
.list {
  list-style: disc inside
}
```

#### Use `overflow` Shorthand

**Guideline:** Combine `overflow` properties.

```css
/* Instead of this */
.overflow {
  overflow-x: hidden;
  overflow-y: scroll
}

/* Use this */
.overflow {
  overflow: hidden scroll
}
```

#### Use `flex` Shorthand

**Guideline:** Use the `flex` shorthand property.

```css
/* Instead of this */
.flex {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto
}

/* Use this */
.flex {
  flex: 1 1 auto
}
```

#### Use `grid` Shorthand

**Guideline:** Use the `grid` shorthand property.

```css
/* Instead of this */
.grid {
  grid-template-rows: 1fr;
  grid-template-columns: 1fr
}

/* Use this */
.grid {
  grid: 1fr / 1fr
}
```

#### Combine `place-items`

**Guideline:** Use `place-items` in grid or flex layouts.

```css
/* Instead of this */
.place {
  align-items: center;
  justify-items: center
}

/* Use this */
.place {
  place-items: center
}
```

#### Use `gap` in Grid and Flexbox

**Guideline:** Use the `gap` property to simplify spacing.

```css
/* Instead of this */
.gap {
  grid-gap: 10px;
  column-gap: 10px;
  row-gap: 10px
}

/* Use this */
.gap {
  gap: 10px
}
```

#### Use Shorter Animations

**Guideline:** Use shorter animation and transition syntax.

```css
/* Instead of this */
.animate {
  transition-property: all;
  transition-duration: 0.3s
}

/* Use this */
.animate {
  transition: all 0.3s
}
```

#### Use `columns` Shorthand

**Guideline:** Combine column properties using the `columns` shorthand.

```css
/* Instead of this */
.columns {
  column-width: 200px;
  column-count: 3
}

/* Use this */
.columns {
  columns: 200px 3
}
```

### Using Shorthand Properties for Single-Side `border`, `margin`, and `padding`

**Guideline:** Use shorthand properties for `border`, `margin`, and `padding` whenever possible to save characters, except in some situations where `left` and `top` properties, where the longhand properties might be shorter.

#### Padding Right

```css
/* Longhand character count: 18 */
.paddding-right {
  padding-right: 1em
}

/* Shorthand character count: 17 = Winner */
.paddding-right {
  padding: 0 1em 0 0
}
```

##### Padding Bottom

```css
/* Longhand character count: 20 */
.paddding-bottom {
  padding-bottom: 1em
}

/* Shorthand character count: 17 = Winner */
.paddding-bottom {
  padding: 0 0 1em 0
}
```

#### Padding Left

```css
/* Longhand character count: 17 = Draw */
.paddding-left {
  padding-left: 1em
}

/* Shorthand character count: 17 = Draw */
.paddding-left {
  padding: 0 0 0 1em
}
```

#### Padding Top

```css
/* Longhand character count: 16 = Winner */
.paddding-top {
  padding-top: 1em
}

/* Shorthand character count: 17 */
.paddding-top {
  padding: 1em 0 0 0
}
```

#### Margin-Right

```css
/* Longhand character count: 17 */
.margin-right {
  margin-right: 1em
}

/* Shorthand character count: 15 = Winner */
.margin-right {
  margin: 0 1em 0 0
}
```

#### Margin Bottom

```css
/* Longhand character count: 19 */
.margin-bottom {
  margin-bottom: 1em
}

/* Shorthand character count: 15 = Winner */
.margin-bottom {
  margin: 0 0 1em 0
}
```

#### Margin Left

```css
/* Longhand character count: 16 */
.margin-left {
  margin-left: 1em
}

/* Shorthand character count: 15 = Winner */
.margin-left {
  margin: 0 0 0 1em
}
```

#### Margin Top

```css
/* Longhand character count: 15 = Draw */
.margin-top {
  margin-top: 1em
}

/* Shorthand character count: 15 = Draw */
.margin-top {
  margin: 1em 0 0 0
}
```

#### Border Right

```css
/* Longhand character count: 24 = Draw */
.border-right {
  border-right: 1px solid #000
}

/* Shorthand character count: 24 = Draw */
.border-right {
  border: 0 1px 0 0 solid #000
}
```

#### Border Bottom

```css
/* Longhand character count: 26 */
.border-bottom {
  border-bottom: 1px solid #000
}

/* Shorthand character count: 24 = Winner */
.border-bottom {
  border: 0 0 1px 0 solid #000
}
```

#### Border Left

```css
/* Longhand character count: 23 = Winner */
.border-left {
  border-left: 1px solid #000
}

/* Shorthand character count: 24 */
.border-left {
  border: 0 0 0 1px solid #000
}
```

#### Border Top

```css
/* Longhand character count: 22 = Winner */ 
.border-top {
  border-top: 1px solid #000
}

/* Shorthand character count: 24 */
.border-top {
  border: 1px 0 0 0 solid #000
}
```