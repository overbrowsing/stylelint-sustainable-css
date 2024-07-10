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