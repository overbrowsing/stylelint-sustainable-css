# avoid-extra-spaces

## Avoid Extra Spaces

**Guideline:** Remove unnecessary spaces and line breaks to save bytes and keep the code clean.

```css
/* Instead of this */
h1 {
  margin: 0;
}

/* Use this */
h1 { margin: 0 }
```

## 2 Spaces Vs 4 Spaces

**Guideline:** We recommend using 2 spaces instead of 4 for code indentation in your CSS files as it saves bytes. By reducing indentation size, you trim unnecessary whitespace in your code.

# avoid-important-declarations

## Avoid `!important` Declarations

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

# remove-quotes-from-fonts

## Remove Unnecessary Quotes from Fonts

**Guideline:** Omit quotes around font and font family names when they are not necessary.

```css
/* Instead of this */
font-family: "Arial", sans-serif;

/* Use this */
font-family: Arial, sans-serif;
```

# remove-semicolons

## Remove Semicolon at End of Lines

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

# use-html-tags

## Utilize HTML Tags for Styling Text

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
