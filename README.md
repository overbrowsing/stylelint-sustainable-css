
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

- ⭐️ - the mark of recommended rules.
- ✒️ - the mark of fixable rules.

|       | Rule ID                                                                                    | Description                                                             |
| :---- | :----------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
|       | [content-property-no-static-value](./src/rules/content-property-no-static-value/README.md) | Disallow unaccessible CSS generated content in pseudo-elements          |
|       | [font-size-is-readable](./src/rules/font-size-is-readable/README.md)                       | Disallow font sizes less than `15px`                                    |
|       | [line-height-is-vertical-rhythmed](./src/rules/line-height-is-vertical-rhythmed/README.md) | Disallow not vertical rhythmed `line-height`                            |
| ⭐️✒️ | [media-prefers-reduced-motion](./src/rules/media-prefers-reduced-motion/README.md)         | Require certain styles if the animation or transition in media features |
|       | [media-prefers-color-scheme](./src/rules/media-prefers-color-scheme/README.md)             | Require implementation of certain styles for selectors with colors.     |
|       | [no-display-none](./src/rules/no-display-none/README.md)                                   | Disallow content hiding with `display: none` property                   |
|       | [no-obsolete-attribute](./src/rules/no-obsolete-attribute/README.md)                       | Disallow obsolete attribute using                                       |
|       | [no-obsolete-element](./src/rules/no-obsolete-element/README.md)                           | Disallow obsolete selectors using                                       |
|       | [no-spread-text](./src/rules/no-spread-text/README.md)                                     | Require width of text in a comfortable range                            |
| ⭐️   | [no-outline-none](./src/rules/no-outline-none/README.md)                                   | Disallow outline clearing                                               |
|       | [no-text-align-justify](./src/rules/no-text-align-justify/README.md)                       | Disallow content with `text-align: justify`                             |
| ⭐️✒️ | [selector-pseudo-class-focus](./src/rules/selector-pseudo-class-focus/README.md)           | Require or disallow a pseudo-element to the selectors with `:hover`     |

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
