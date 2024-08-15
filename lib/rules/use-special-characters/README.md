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