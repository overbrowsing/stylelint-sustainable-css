# Rules

## Guidance

The majority of these rules will cover 99.9% of most use cases for making your style sheet file smaller. However, there are some exceptions and specific cases for each rule, which we suggest reviewing in this document incase the plugin has broken a specific style of your project.

This is a living document and is continuously evolving, we welcome your contributions.

## Shorthand Properties

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

### Optimize `text-decoration`

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

## Values

### Use Numerical Values for `font-weight`

**Guideline:** Use numeric values for `font-weight` instead of descriptive keywords when possible as it is shorter to declare them as numerical values instead of descriptive keywords.

```css
/* Instead of this */
font-weight: bold;

/* Use this */
font-weight: 700;
```

### Use Hexadecimal Color Codes

**Guideline:** Use hex codes instead of RGB values for solid colors.
**Exception:** If you are using RGB to adjust opacity levels, continue using RGB values.

```css
/* Instead of this */
color: rgb(64, 232, 90);

/* Use this */
color: #40e85a;
```

### Shorten Hex Colour Codes

**Guideline:  S**horten hex codes them when possible (e.g., black can be shortened to `#000` and white to `#fff`).

```css
/* Instead of this */
color: #ffffff

/* Use this */
color: #fff
```

### Use `transparent` for Transparent Colors

**Guideline:** Use `transparent` keyword for fully transparent colors as it uses less characters.

```css
/* Instead of this */
background: rgba(0, 0, 0, 0);

/* Use this */
background: transparent;
```

### Use Shorter Units

**Guideline:** Use shorter units like `em` or `rem` when possible.
**Explanation:** Absolute pixel sizing can sometimes be a few characters longer such as 100px instead of 8em.

```css
/* Instead of this */
width: 100px;

/* Use this */
width: 8em;
```

### Using `em` vs `rem`

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

### Minimise Decimal Values

**Guideline:** Omit the 0 before a decimal value to save a single character.

```css
/* Instead of this */
margin: 0.5em;

/* Use this */
margin: .5em;
```

### Minimise Zero Values

**Guideline:** Omit the unit for zero values.

```css
/* Instead of this */
margin: 0px;

/* Use this */
margin: 0;
```

### Remove Unnecessary Units for `line-height`

**Guideline:** For example omit units for `line-height`.

```css
/* Instead of this */
line-height: 1.5em;

/* Use this */
line-height: 1.5;
```

### Remove Redundant Values

**Guideline:** Remove redundant values from properties that don’t need them.

```css
/* Instead of this */
background: none repeat scroll 0 0 transparent;

/* Use this */
background: none;
```

## Best Practices

### Use Shorter Class/ID Names

**Guideline:** When naming classes and IDs, opt for shorter and descriptive names to enhance readability and navigation within your CSS files.

```css
cssCopy code
/* Instead of this */
.element-with-long-name { ... }

/* Use this */
.element { ... }
```

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

### Avoid Overly Specific Selectors

**Guideline:** Avoid unnecessary specificity in selectors.

```css
/* Instead of this */
div#content > p.intro { ... }

/* Use this */
.intro { ... }
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

### Target Attribute Selectors instead of Overly Specific Classes/IDs

**Guideline:** Use attribute selectors instead of class names for specific styling when appropriate, reducing the need for extra class definitions.

```css
/* Instead of this */
.element-with-long-name { ... }

/* Use this */
button[data-type="primary"] { ... }
```

### Concatenating Property Values

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

### Combine Multiple of the Same Property Values

**Guideline:** Combine multiple CSS property values into a single line using a comma-separated list.

```css
/* Instead of this */
box-shadow: 1px 1px 2px #000;
box-shadow: inset 0 0 10px #000;

/* Use this */
box-shadow: 1px 1px 2px #000, inset 0 0 10px #000;
```

### Minimize Vendor Prefixes

**Guideline:** Use autoprefixers or browser support checks to avoid unnecessary vendor prefixes that add extra bytes to CSS files.

```css
/* Instead of this */
-webkit-transition: all 0.3s;
-moz-transition: all 0.3s;
transition: all 0.3s;

/* Use this */
transition: all 0.3s;
```

### Use Default Values

**Guideline:** Rely on browser defaults when possible.

```css
/* Instead of this */
border-style: none;

/* Use this */
border: 0;
```

### Remove Unnecessary Quotes from Fonts

**Guideline:** Omit quotes around font and font family names when they are not necessary.

```css
/* Instead of this */
font-family: "Arial", sans-serif;

/* Use this */
font-family: Arial, sans-serif;
```

### Minimize Use of `float`

**Guideline:** Use flexbox or grid instead of `float`.

```css
/* Instead of this */
float: left;
width: 50%;

/* Use this */
display: flex;
```

### Minimize Length of `animation` Names

**Guideline:** Use shorter names for `@keyframes` animations.

```css
/* Instead of this */
@keyframes slideFromLeft { ... }

/* Use this */
@keyframes slide { ... }
```

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
  .header, .footer { ... }
}

/* Or Use this */
@media screen and (max-width: 768px) {
  .header { ... }
  
  .footer { ... }
}
```

### Avoid `!important` Declarations

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

### Use `:not` Pseudo-Class for Exclusions

**Guideline:** Use the `:not` pseudo-class to avoid unnecessary styles changes.

```css
/* Instead of this */
.item {
  color: #000
}

.item.special {
  color: #fff
}

/* Use this */
.item:not(.special) {
  color: #000
}
```

### Use `display: none` for Hiding Elements

**Guideline:** Use `display: none` instead of visibility or opacity to completely hide elements.

```css
/* Instead of this */
.hidden {
  visibility: hidden;
}

/* Use this */
.hidden {
  display: none;
}
```

### Use `inherit` and `initial` Wisely

**Guideline:** Use `inherit` and `initial` values to simplify style rules.

```css
/* Instead of this */
.child {
  color: #000
}

.parent .child {
  color: inherit;
}

/* Use this */
.parent .child {
  color: inherit;
}
```

### Minimize Unnecessary `z-index`

**Guideline:** Avoid using high `z-index` values unnecessarily.

```css
/* Instead of this */
.element {
  z-index: 9999;
}

/* Use this */
.element {
  z-index: 4;
}
```

## Layout and Positioning

### CSS Grid for Complex Layouts

**Guideline:** Use CSS Grid for complex layout structures to simplify code.

```css
/* Instead of this */
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  width: 50%;
}

/* Use this */
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
```

### Inline Flexbox for Quick Alignments

**Guideline:** Use flexbox for simple alignments within a single container.

```css
/* Instead of this */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Use this */
.container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

## Formatting

### 2 Spaces Vs 4 Spaces

**Guideline:** We recommend using 2 spaces instead of 4 for code indentation in your CSS files as it saves bytes. By reducing indentation size, you trim unnecessary whitespace in your code.

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

### Remove Semicolon at End of Lines

**Guideline:** Avoid using semicolons at the end of CSS lines unless necessary.

**Explanation:** In CSS, semicolons are used to separate declarations within a ruleset. They are necessary after each declaration but are not required after the last declaration in a ruleset.

```css
/* Instead of this */
h1 {
  margin: 0;
}

/* Use this */
h1 { 
  margin: 0
}
```

### Compression/Minifying

**Guideline:** Our philosophy advocates against excessive compression and minification in CSS. While these methods can reduce file sizes, they often obscure the techniques used upon inspection, limiting their utility for others adopting similar practices in their projects. Maintaining clean and readable CSS is vital for facilitating efficient development and enabling others to benefit from and adopt these techniques.

## Additional Optimisations

### **Using Shorthand Properties for Single-Side `border`, `margin`, and `padding`**

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

### Minimize `@font-face` HTTP Requests

**Guideline:** If possible, reduce the number of custom fonts or subsets loaded using `@font-face` to decrease HTTP requests and improve page load times.

```css
/* Instead of this */
@font-face {
  font-family: 'CustomFont';
  src: url('custom-font.woff') format('woff'),
       url('custom-font.woff2') format('woff2');
  font-weight: 400;
}

/* Use this */
@font-face {
  font-family: 'CustomFont';
  src: url('custom-font.woff2') format('woff2');
  font-weight: 400;
}
```

### Utilize HTML Tags for Styling Text

**Guideline:** Use HTML tags (`<strong>`, `<b>`, `<em>`, `<i>`) for styling text instead of relying solely on CSS properties. We recommend using just `<b>` and `<i>` as they’re much shorter!

```css
/* Instead of this */
font-weight: bold;

/* Instead of this */
font-style: italic;
```

```html
<!-- Use this -->
<b>bold</b>

<!-- Use this -->
<i>italic</i>
```

### Special Characters vs Entites vs Unicode

Guideline: It is preferable to use special characters (such as ©, ®, emojis, etc.) directly rather than longer HTML entities or Unicode codes in HTML documents. In situations where clarity or compatibility demands, opting for HTML entities instead of Unicode values may also result in shorter code, thereby reducing file size and enhancing readability.

**Sum (**∑**)**

```html
<!-- Character count: 1 -->
∑

<!-- Character count: 5 -->
&sum;

<!-- Character count: 7 -->
&#8721;
```

**Copyright Symbol (©)**

```html
<!-- Character count: 1 -->
©

<!-- Character count: 6 -->
&copy;

<!-- Character count: 6 -->
&#169;
```

**Emoji (Newspaper 📰)**

```html
<!-- Character count: -->
📰

<!-- Character count: -->
&#x1F4B0;
```

### **Unicode Characters for Icons**

**Guideline:** Use Unicode characters instead of icon fonts or SVG icons where appropriate to reduce the need for additional CSS and font files. You can also use emojis. There are great Unicode characters for arrows and other navigation icons.

```css
/* Instead of this */
.icon {
  background-image: url('icon.svg');
}

/* Use this */
.icon::before {
  content: 'U+1F40E'; /* Unicode Character “🐎” */
}

/* Or Use this */
.icon::before {
  content: '🐎';
}
```

### **Data URIs for Small Images**

**Guideline:** Convert small images to Data URIs to embed them directly into CSS, reducing HTTP requests.

```css
/* Instead of this */
.logo {
  background-image: url('logo.png');
}

/* Use this */
.logo {
  background-image: url('data:image/png;base64...');
}
```