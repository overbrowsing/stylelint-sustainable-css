# Use Hexadecimal Color Codes

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