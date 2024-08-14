

# **Sustainable CSS — Stylelint Plugin**

[![NPM version](http://img.shields.io/npm/v/stylelint-sustainable-css.svg)](https://www.npmjs.org/package/stylelint-sustainable-css)
[![npm](https://img.shields.io/npm/dt/stylelint-sustainable-css.svg)](http://www.npmtrends.com/stylelint-sustainable-css)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Every Byte Counts

Sustainable CSS is a [Stylelint](https://stylelint.io) plugin dedicated to following [sustainable web design](https://sustainablewebdesign.org) principles. The plugin optimises CSS by identifying and addressing issues that contribute to larger file sizes, thereby helping conserve environmental resources.

While many style guides are subjective regarding appearance, our core principle is simple: "Does it save bytes?"


## Installation and usage

```bash
npm install --save-dev stylelint stylelint-sustainable-css
```

Create the `.stylelintrc.json` config file (or open the existing one), add `stylelint-sustainable-css` to the plugins array and the rules you need to the rules list. All rules from stylelint-sustainable-css need to be namespaced with `sustainable-css`.

Please refer to [stylelint docs](https://stylelint.io/user-guide/) for the detailed info on using this linter.

## Rules

⭐️ - the mark of recommended group of rules.

|    | Group ID                         | Description                                                              |
| :- | :------------------------------- | :----------------------------------------------------------------------- |
|    | [avoid-duplicate-media-queries][1] | Avoid defining identical media queries multiple times in the stylesheet.  |
|    | [concatenate-property-values][2] | Concatenate property values where applicable to reduce CSS file size.     |
|    | [no-important-tags][3]           | Prevent the use of `!important` in styles to maintain code simplicity and avoid specificity issues. |
|    | [no-semicolons][4]               | Enforce the removal of unnecessary semicolons within CSS rules.           |
|    | [no-vendor-prefixes][5]          | Avoid the use of vendor prefixes to encourage cross-browser compatibility through standard properties. |
|    | [optimise-selectors][6]          | Simplify selector names, combine selectors with shared properties, and minimise media queries. |
| ⭐️ | [remove-redundancies][7]         | Remove redundant glyphs, spaces, declarations, and properties.            |
| ⭐️ | [shorten-properties][8]          | Remove redundant properties, merge them where possible, and use shorter property names. |
| ⭐️ | [shorten-units][9]               | Use shortened values and units, apply shorthand values, and remove redundant characters within values. |
|    | [use-special-characters][10]     | Use special characters in CSS where appropriate to reduce code length and enhance readability. |

[1]: lib/rules/avoid-duplicate-media-queries/README.md
[2]: lib/rules/concatenate-property-values/README.md
[3]: lib/rules/no-important-tags/README.md
[4]: lib/rules/no-semicolons/README.md
[5]: lib/rules/no-vendor-prefixes/README.md
[6]: lib/rules/optimise-selectors/README.md
[7]: lib/rules/remove-redundancies/README.md
[8]: lib/rules/shorten-properties/README.md
[9]: lib/rules/shorten-units/README.md
[10]: lib/rules/use-special-characters/README.md


## Recommended config

Add recommended configuration by simply adding the following to `extends` in your stylelint configuration:

```
stylelint-sustainable-css/recommended
```

This shareable config contains the following:

```json
{
  "plugins": ["stylelint-sustainable-css"],
  "rules": {
    "sustainable-css/shorten-units": true,
    "sustainable-css/shorten-properties": true,
    "sustainable-css/remove-redundancies": true,
    "sustainable-css/optimise-selectors": true
  }
}
```

Since it adds stylelint-sustainable-css to `plugins`, you don't have to do this yourself when extending this config.


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
