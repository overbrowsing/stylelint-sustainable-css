### Stylelint Sustainable CSS Plugin

This repository contains a Stylelint plugin designed to enforce sustainable CSS practices by checking for various common issues in CSS code. This README will guide you on how to test the plugin.

## Repository Structure
```bash
lib
  └── index.js         # The plugin implementation
example
  ├── src
  │   └── index.css     # CSS file with violations for testing
  ├── package.json     # Test site's package configuration
  └── .stylelintrc.json # Stylelint configuration for the test site
package.json           # Main project package configuration
```

## Getting Started

Follow these steps to test the plugin in the test site:
Step 1: Clone the Repository

```sh
git clone https://github.com/printer_scanner/stylelint-sustainable-css.git
cd stylelint-sustainable-css-plugin
```

### Step 2: Install Dependencies

Navigate to the example directory and install the necessary dependencies.

```sh
cd example
npm install
npm install --save-dev ../  # Link the plugin for local testing
```

### Step 3: Verify Stylelint Configuration

Ensure the .stylelintrc.json in the example directory is correctly configured to use the plugin:

```json

{
  "extends": "stylelint-config-standard",
  "plugins": [
    "../lib/index"  // Path to your plugin
  ],
  "rules": {
    "plugin/stylelint-sustainable-css": [true, {
      // Add any secondary options here
    }]
  }
}
```

### Step 4: Test the Plugin

Run Stylelint on the test CSS file to see the plugin in action:

```sh
npm run lint
```

The lint script is defined in example/package.json as follows:

```json

"scripts": {
  "lint": "stylelint 'src/**/*.css'"
}
```

Example CSS with Violations

Here is an example CSS file example/src/index.css containing several rule violations:

```css
/* Longhand properties instead of shorthand */
.foo {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}

/* Zero values with units */
.bar {
  padding: 0px;
  margin: 0em;
}

/* Long form hex colors */
.baz {
  color: #ffffff;
  background-color: #000000;
}

/* Duplicate properties */
.qux {
  color: red;
  color: blue;
}

/* Vendor prefixes */
.quux {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
}

/* Duplicate selectors */
.foo, .foo {
  font-size: 16px;
}

/* Empty block */
.empty {
}
```

When you run npm run lint, you should see output indicating the violations found by the plugin.

## Contributing

Feel free to open issues or submit pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License.