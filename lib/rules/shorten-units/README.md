## shorten-units

### Use Hexadecimal Color Codes

**Guideline:** Use hex codes instead of RGB values for solid colors.
**Exception:** If you are using RGB to adjust opacity levels, continue using RGB values.

```css
/* Instead of this */
p {
  color: rgb(64, 232, 90)
}

/* Use this */
p {
  color: #40e85a
}
```

### Shorten Hex Colour Codes

**Guideline:** Shorten hex codes them when possible (e.g., black can be shortened to `#000` and white to `#fff`).

```css
/* Instead of this */
a {
  color: #ffffff
}

/* Use this */
a {
  color: #fff
}
```

### Use `transparent` for Transparent Colors

**Guideline:** Use `transparent` keyword for fully transparent colors as it uses less characters.

```css
/* Instead of this */
.transparent {
  background: rgba(0, 0, 0, 0)
}

/* Use this */
.transparent {
  background: transparent
}
```

### Lower Unnecessary `z-index`

**Guideline:** Avoid using high `z-index` values unnecessarily.

```css
/* Instead of this */
.zindex {
  z-index: 9999
}

/* Use this */
.zindex {
  z-index: 4
}
```

### Minimise `@font-face` HTTP Requests

**Guideline:** If possible, reduce the number of custom fonts or subsets loaded using `@font-face` to decrease HTTP requests and improve page load times.

```css
/* Instead of this */
@font-face {
  font-family: 'CustomFont';
  src: url('custom-font.woff') format('woff'),
       url('custom-font.woff2') format('woff2');
  font-weight: 400
}

/* Use this */
@font-face {
  font-family: 'CustomFont';
  src: url('custom-font.woff2') format('woff2');
  font-weight: 400
}
```

### Minimise Decimal Values

**Guideline:** Omit the 0 before a decimal value to save a single character.

```css
/* Instead of this */
.decimal {
  margin: 0.5em
}

/* Use this */
.decimal {
  margin: .5em
}
```

### Minimise Zero Values

**Guideline:** Omit the unit for zero values.

```css
/* Instead of this */
.zerovalue {
  margin: 0px
}

/* Use this */
.zerovalue {
  margin: 0
}
```

### Use Numerical Values for `font-weight`

**Guideline:** Use numeric values for `font-weight` instead of descriptive keywords when possible as it is shorter to declare them as numerical values instead of descriptive keywords.

```css
/* Instead of this */
.fontweight {
  font-weight: bold
}

/* Use this */
.fontweight {
  font-weight: 700
}
```

### Using `em` vs `rem`

**Guideline:** Prefer using `em` units for sizing unless `rem` units are specifically necessary for consistency across the entire document. Saving one single character from the value by using `em`.

**Explanation:** `em` units are relative to the font size of the parent element, making them ideal for maintaining proportional scaling within nested elements. On the other hand, `rem` units are relative to the root (`html`) element's font size, providing a consistent base size across the entire document. Use `rem` when you need uniform scaling across different sections of your website, but remember that `rem` introduces an additional character in its value compared to `em`.

```css
/* Instead of this */
.em {
  padding: 16px /* Using absolute pixels */
}

/* Use this */
.em {
  padding: 1em /* Relative to parent element */
}

/* Or use this */
.rem {
  padding: 1rem /* Relative to root element */
}
```

### Use Shorter Units

**Guideline:** Use shorter units like `em` or `rem` when possible.

**Explanation:** Absolute pixel sizing can sometimes be a few characters longer such as 100px instead of 8em.

```css
/* Instead of this */
.shorterunits {
  width: 100px
}

/* Use this */
.shorterunits {
  width: 8em
}
``

### Remove Unnecessary Units for `line-height`

**Guideline:** For example omit units for `line-height`.

```css
/* Instead of this */
.lineheight {
  line-height: 1.5em
}

/* Use this */
.lineheight {
  line-height: 1.5
}
````