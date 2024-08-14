# Special Characters vs Entites vs Unicode

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