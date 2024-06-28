# **Sustainable CSS — Stylelint Plugin**

## Every Byte Counts

Sustainable CSS is a Stylelint plugin dedicated to sustainable web design principles. It optimises CSS by identifying and addressing issues that contribute to larger file sizes, thereby helping conserving environmental resources.

While many style guides are subjective regarding appearance, our core principle is simple: "Does it save bytes?"

## Rules

You can find all the rules for the plugin in this document, complete with examples and explanations/evidence for each.

## Results

We plan to showcase detailed before and after results from live websites to illustrate the impact of our efforts. These examples will demonstrate how small optimisations in CSS can lead to significant environmental savings, highlighting the practical benefits of adopting sustainable web design practices. We’d love to hear about your experiences and results using our plugin. Please feel free to [email us](mailto:research@headless.horse).


## Repository Structure
```bash
lib
  └── index.js          # The plugin implementation
example
  ├── src
  │   └── index.css     # CSS file with violations for testing
  ├── package.json      # Test site's package configuration
  └── .stylelintrc.json # Stylelint configuration for the test site
package.json            # Main project package configuration
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
npm install --save-dev ../ # Link the plugin for local testing
```

### Step 3: Verify Stylelint Configuration

Ensure the .stylelintrc.json in the example directory is correctly configured to use the plugin:

```json

{
  "extends": "stylelint-config-standard",
  "plugins": [
    "../lib/index" // Path to your plugin
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

/* Longform hex colors */
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

## How to Help

The development of this plugin's rules is ongoing, and we welcome your contributions. Here’s how you can help:

- Create, improve, or debug rules (refer to Stylelint’s [Working on Rules Guide](https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/rules.md)).
- Enhance the documentation.
- Engage with us via [issues](https://github.com/printerscanner/stylelint-sustainable-css/issues) and [pull requests](https://github.com/printerscanner/stylelint-sustainable-css/pulls).
- Propose new rules or improvements, and submit pull requests to demonstrate your ideas.
- Add tests for any aspect of the project.
- Optimise rule performance.
- Contribute to [Stylelint](https://github.com/stylelint/stylelint).
- View our sustainable web design resources website, [Overbrowsing](https://overbrowsing.com/).
- Spread the word about sustainable web design!

## License
This project is licensed under the MIT License.