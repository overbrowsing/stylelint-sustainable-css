# Shorthand Optimisations

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
