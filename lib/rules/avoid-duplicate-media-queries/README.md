## avoid-duplicate-media-queries

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
  .header { ... }

  .footer { ... }
}

/* Or Use this */
@media screen and (max-width: 768px) {
  .header, .footer { ... }
}
```