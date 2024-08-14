# Rules

## Guidance

The majority of these rules will cover 99.9% of most use cases for making your style sheet file smaller. However, there are some exceptions and specific cases for each rule, which we suggest reviewing in this document incase the plugin has broken a specific style of your project.

This is a living document and is continuously evolving, we welcome your contributions.

Read more about the project on [npm](https://www.npmjs.com/package/stylelint-sustainable-css).


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

### Minimise Use of `float`

**Guideline:** Use flexbox or grid instead of `float`.

```css
/* Instead of this */
float: left;
width: 50%;

/* Use this */
display: flex;
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

### Minimise Unnecessary `z-index`

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

### Minimise `@font-face` HTTP Requests

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