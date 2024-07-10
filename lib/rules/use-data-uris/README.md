### **Data URIs for Small Images**

**Guideline:** Convert small images to Data URIs to embed them directly into CSS, reducing HTTP requests.

```css
/* Instead of this */
.logo {
  background-image: url('logo.png');
}

/* Use this */
.logo {
  background-image: url('data:image/png;base64...');
}
```