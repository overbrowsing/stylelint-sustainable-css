module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "../lib/index"  
  ],
  "rules": {
    "sustainable-css/avoid-compression": true,
    "sustainable-css/avoid-extra-spaces": true,
    "sustainable-css/avoid-important-declarations": true,
    "sustainable-css/avoid-inherit-initial": true
  }
}
