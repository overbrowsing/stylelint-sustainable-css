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