# color-hex-codes

## Use Hexadecimal Color Codes

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

# prefer-transparent

## Use `transparent` for Transparent Colors

**Guideline:** Use `transparent` keyword for fully transparent colors as it uses less characters.

```css
/* Instead of this */
background: rgba(0, 0, 0, 0);

/* Use this */
background: transparent;
```

# lower-z-index-values

## Lower Unnecessary `z-index`

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

# minimise-fontface-requests

## Minimise `@font-face` HTTP Requests

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

# minimise-numeric-values

## Minimise Decimal Values

**Guideline:** Omit the 0 before a decimal value to save a single character.

```css
/* Instead of this */
margin: 0.5em;

/* Use this */
margin: .5em;
```

## Minimise Zero Values

**Guideline:** Omit the unit for zero values.

```css
/* Instead of this */
margin: 0px;

/* Use this */
margin: 0;
```

# numerical-font-weight

##  Use Numerical Values for `font-weight`

**Guideline:** Use numeric values for `font-weight` instead of descriptive keywords when possible as it is shorter to declare them as numerical values instead of descriptive keywords.

```css
/* Instead of this */
font-weight: bold;

/* Use this */
font-weight: 700;
```

# prefer-em

## Using `em` vs `rem`

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

# remove-unnecessary-units

## Remove Unnecessary Units for `line-height`

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

# shorter-units

## Use Shorter Units

**Guideline:** Use shorter units like `em` or `rem` when possible.
**Explanation:** Absolute pixel sizing can sometimes be a few characters longer such as 100px instead of 8em.

```css
/* Instead of this */
width: 100px;

/* Use this */
width: 8em;
```

# use-special-characters

## Special Characters vs Entites vs Unicode

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