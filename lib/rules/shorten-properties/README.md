# concatenate-property-values

## Combine Multiple of the Same Property Values on a Single Line

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

## Combine Multiple of the Same Property Values with a Comma-Separated List

**Guideline:** Combine multiple CSS property values into a single line using a comma-separated list.

```css
/* Instead of this */
box-shadow: 1px 1px 2px #000;
box-shadow: inset 0 0 10px #000;

/* Use this */
box-shadow: 1px 1px 2px #000, inset 0 0 10px #000;
```

# shorthand-properties

## Margin and Padding

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

## Simplify Typography Using the `font` Shorthand Property

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

## Simplify `border`

**Guideline:** Combine border width, style, and color in one line.

```css
/* Instead of this */
border-width: 1px;
border-style: solid;
border-color: #000;

/* Use this */
border: 1px solid #000;
```

## Optimise `text-decoration`

**Guideline:** Combine `text-decoration` properties.

```css
cssCopy code
/* Instead of this */
text-decoration-line: underline;
text-decoration-style: dotted;

/* Use this */
text-decoration: underline dotted;
```

## Simplify `background`

**Guideline:** Combine all background properties into one `background` property.

```css
/* Instead of this */
background-color: #fff;
background-image: url('image.png');
background-repeat: no-repeat;

/* Use this */
background: #fff url('image.png') no-repeat;
```

## Optimise `list-style`

**Guideline:** Combine `list-style` properties.

```css
/* Instead of this */
list-style-type: disc;
list-style-position: inside;

/* Use this */
list-style: disc inside;
```

## Use `overflow` Shorthand

**Guideline:** Combine `overflow` properties.

```css
/* Instead of this */
overflow-x: hidden;
overflow-y: scroll;

/* Use this */
overflow: hidden scroll;
```

## Use `flex` Shorthand

**Guideline:** Use the `flex` shorthand property.

```css
/* Instead of this */
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;

/* Use this */
flex: 1 1 auto;
```

## Use `grid` Shorthand

**Guideline:** Use the `grid` shorthand property.

```css
/* Instead of this */
grid-template-rows: 1fr;
grid-template-columns: 1fr;

/* Use this */
grid: 1fr / 1fr;
```

## Combine `place-items`

**Guideline:** Use `place-items` in grid or flex layouts.

```css
/* Instead of this */
align-items: center;
justify-items: center;

/* Use this */
place-items: center;
```

## Use `gap` in Grid and Flexbox

**Guideline:** Use the `gap` property to simplify spacing.

```css
/* Instead of this */
grid-gap: 10px;
column-gap: 10px;
row-gap: 10px;

/* Use this */
gap: 10px;
```

## Use Shorter Animations

**Guideline:** Use shorter animation and transition syntax.

```css
/* Instead of this */
transition-property: all;
transition-duration: 0.3s;

/* Use this */
transition: all 0.3s;
```

## Use `columns` Shorthand

**Guideline:** Combine column properties using the `columns` shorthand.

```css
/* Instead of this */
column-width: 200px;
column-count: 3;

/* Use this */
columns: 200px 3;
```

# shorter-properties

## **Using Shorthand Properties for Single-Side `border`, `margin`, and `padding`**

**Guideline:** Use shorthand properties for `border`, `margin`, and `padding` whenever possible to save characters, except in some situations where `left` and `top` properties, where the longhand properties might be shorter.

**Padding Right**

```css
/* Longhand character count: 18 */
padding-right: 1em;

/* Shorthand character count: 17 = Winner */
padding: 0 1em 0 0;
```

**Padding Bottom**

```css
/* Longhand character count: 20 */
padding-bottom: 1em;

/* Shorthand character count: 17 = Winner */
padding: 0 0 1em 0;
```

**Padding Left**

```css
/* Longhand character count: 17 = Draw */
padding-left: 1em;

/* Shorthand character count: 17 = Draw */
padding: 0 0 0 1em;
```

**Padding Top**

```css
/* Longhand character count: 16 = Winner */
padding-top: 1em;

/* Shorthand character count: 17 */
padding: 1em 0 0 0;
```

**Margin-Right**

```css
/* Longhand character count: 17 */
margin-right: 1em;

/* Shorthand character count: 15 = Winner */
margin: 0 1em 0 0;
```

**Margin Bottom**

```css
/* Longhand character count: 19 */
margin-bottom: 1em;

/* Shorthand character count: 15 = Winner */
margin: 0 0 1em 0;
```

**Margin Left**

```css
/* Longhand character count: 16 */
margin-left: 1em;

/* Shorthand character count: 15 = Winner */
margin: 0 0 0 1em;
```

**Margin Top**

```css
/* Longhand character count: 15 = Draw */
margin-top: 1em;

/* Shorthand character count: 15 = Draw */
margin: 1em 0 0 0;
```

**Border Right**

```css
/* Longhand character count: 24 = Draw */
border-right: 1px solid #000;

/* Shorthand character count: 24 = Draw */
border: 0 1px 0 0 solid #000;
```

**Border Bottom**

```css
/* Longhand character count: 26 */
border-bottom: 1px solid #000;

/* Shorthand character count: 24 = Winner */
border: 0 0 1px 0 solid #000;
```

**Border Left**

```css
/* Longhand character count: 23 = Winner */
border-left: 1px solid #000;

/* Shorthand character count: 24 */
border: 0 0 0 1px solid #000;
```

**Border Top**

```css
/* Longhand character count: 22 = Winner */ 
border-top: 1px solid #000;

/* Shorthand character count: 24 */
border: 1px 0 0 0 solid #000;
```

# minimise-vendor-prefixes

## Minimise Vendor Prefixes

**Guideline:** Use autoprefixers or browser support checks to avoid unnecessary vendor prefixes that add extra bytes to CSS files.

```css
/* Instead of this */
-webkit-transition: all 0.3s;
-moz-transition: all 0.3s;
transition: all 0.3s;

/* Use this */
transition: all 0.3s;
```