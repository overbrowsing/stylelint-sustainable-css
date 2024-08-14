# Remove Semicolon at End of Lines

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