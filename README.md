
# **Sustainable CSS — Stylelint Plugin**

[![NPM version](http://img.shields.io/npm/v/stylelint-sustainable-css.svg)](https://www.npmjs.org/package/stylelint-sustainable-css)
[![npm](https://img.shields.io/npm/dt/stylelint-sustainable-css.svg)](http://www.npmtrends.com/stylelint-sustainable-css)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Installation and usage

```bash
npm install --save-dev stylelint stylelint-sustainable-css
```

Create the `.stylelintrc.json` config file (or open the existing one), add `stylelint-sustainable-css` to the plugins array and the rules you need to the rules list. All rules from stylelint-sustainable-css need to be namespaced with `sustainable-css`.

Please refer to [stylelint docs](https://stylelint.io/user-guide/) for the detailed info on using this linter.

## Rules

⭐️ - the mark of recommended group of rules.

|    | Group ID                         | Description                      |
| :- | :------------------------------- | :------------------------------- |
| ⭐️ | [shorter-values][1]              | Use shortened values and units, apply shorthand values and remove redundant characters within values. |
| ⭐️ | [optimise-properties][2]         | Remove redundant properties, merge them where possible, and use shorter property names. |
| ⭐️ | [remove-redundancies][3]           | Remove redundant glyphs, spaces, declarations, and properties. |
|    | [optimise-selectors][4]          | Simplify selector names, combine selectors with shared properties, and minimise media queries. |

[1]: lib/rules/shorter-values/README.md
[2]: lib/rules/optimise-properties/README.md
[3]: lib/rules/remove-redundancies/README.md
[4]: lib/rules/optimise-selectors/README.md

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
    "sustainable-css/avoid-compression": true,
    "sustainable-css/avoid-extra-spaces": true,
    "sustainable-css/avoid-important-declarations": true,
    "sustainable-css/avoid-inherit-initial": true
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
