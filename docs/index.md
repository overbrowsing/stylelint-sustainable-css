# Rules

## Guidance

The majority of these rules will cover 99.9% of most use cases for making your style sheet file smaller. However, there are some exceptions and specific cases for each rule, which we suggest reviewing in this document incase the plugin has broken a specific style of your project.

This is a living document and is continuously evolving, we welcome your contributions.

Read more about the project on [npm](https://www.npmjs.com/package/stylelint-sustainable-css).

## avoid-duplicate-media-queries

### Optimise Media Queries

**Guideline:** Combine similar media queries and avoid redundant declarations within them to keep stylesheet size minimal.

```css
/* Instead of this */
@media screen and (max-width: 768px) {
  .header { ... }
}

@media screen and (max-width: 768px) {
  .footer { ... }
}

/* Use this */
@media screen and (max-width: 768px) {
  .header { ... }

  .footer { ... }
}

/* Or Use this */
@media screen and (max-width: 768px) {
  .header, .footer { ... }
}
```

## concatenate-property-values

### Concatenating Property Values

**Guideline:** Combine multiple CSS properties on a single line to reduce redundancy and improve readability.

```css
/* Instead of this */
.element {
  filter: grayscale(100%);
  filter: blur(5px)
}

/* Use this */
.element {
  filter: grayscale(100%) blur(5px)
}
```

### Combine Multiple of the Same Property Values

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

## no-important-tags

### Avoid `!important` Declarations

**Guideline:** Minimise the use of `!important` to maintain CSS specificity and avoid overriding styles unnecessarily.

```css
/* Instead of this */
.footer {
  color: green !important
}

/* Use this */
.footer {
  color: green
}
```

## no-semicolons

### Remove Semicolon at End of Lines

**Guideline:** Avoid using semicolons at the end of CSS lines unless necessary.

**Explanation:** In CSS, semicolons are used to separate declarations within a ruleset. They are necessary after each declaration but are not required after the last declaration in a ruleset.

```css
/* Instead of this */
h1 {
  color: green;
}

/* Use this */
h1 { 
  color: green
}
```

## no-vendor-prefixes

### Minimise Vendor Prefixes

**Guideline:** Use autoprefixers or browser support checks to avoid unnecessary vendor prefixes that add extra bytes to CSS files.

```css
/* Instead of this */
.element {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s
}

/* Use this */
.element {
  transition: all 0.3s
}
```

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

## remove-redundancies

### Avoid Extra Spaces

**Guideline:** Remove unnecessary spaces and line breaks to save bytes and keep the code clean.

```css
/* Instead of this */
h1 {
  margin: 0;
}

/* Use this */
h1 { margin: 0 }
```

### 2 Spaces Vs 4 Spaces

**Guideline:** We recommend using 2 spaces instead of 4 for code indentation in your CSS files as it saves bytes. By reducing indentation size, you trim unnecessary whitespace in your code.

### Remove Unnecessary Quotes from Fonts

**Guideline:** Omit quotes around font and font family names when they are not necessary.

```css
/* Instead of this */
h1 {
  font-family: "Arial", sans-serif
}

/* Use this */
h1 {
  font-family: Arial, sans-serif
}
```

### Utilize HTML Tags for Styling Text

**Guideline:** Use HTML tags (`<strong>`, `<b>`, `<em>`, `<i>`) for styling text instead of relying solely on CSS properties. We recommend using just `<b>` and `<i>` as they’re much shorter!

```css
/* Instead of this */
font-weight: bold

/* Instead of this */
font-style: italic
```

```html
<!-- Use this -->
<b>bold</b>

<!-- Use this -->
<i>italic</i>
```

### Remove Redundant Values

**Guideline:** Remove redundant values from properties that don’t need them.

```css
/* Instead of this */
background: none repeat scroll 0 0 transparent

/* Use this */
background: none
```

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

## use-special-characters

### Special Characters vs Entites vs Unicode

Guideline: It is preferable to use special characters (such as ©, ®, emojis, etc.) directly rather than longer HTML entities or Unicode codes in HTML documents. In situations where clarity or compatibility demands, opting for HTML entities instead of Unicode values may also result in shorter code, thereby reducing file size and enhancing readability.

#### Sum (∑)

```css
/* Character count: 1 = Winner */
.sum::before {
  content: '∑'
}

/* Character count: 5 */
.sum::before {
  content: '&sum;'
}

/* Character count: 7 */
.sum::before {
  content: '&#8721;'
}
```

#### Copyright Symbol (©)

```css
/* Character count: 1 = Winner */
.copyright::before {
  content: '©'
}

/* Character count: 6 */
.copyright::before {
  content: '&copy;'
}

/* Character count: 6 */
.copyright::before {
  content: '&#169;'
}
```

#### Emoji (Newspaper 📰)

```css
/* Character count: 1 */
.newspaper::before {
  content: '📰'
}

/* Character count: 9 */
.newspaper::before {
  content: '&#x1F4B0;'
}
```

### Unicode Characters for Icons

**Guideline:** Use Unicode characters instead of icon fonts or SVG icons where appropriate to reduce the need for additional CSS and font files. You can also use emojis. There are great Unicode characters for arrows and other navigation icons.

```css
/* Instead of this */
.icon {
  background-image: url('icon.svg')
}

/* Use this */
.icon::before {
  content: 'U+1F40E'
}

/* Or Use this */
.icon::before {
  content: '🐎'
}
```