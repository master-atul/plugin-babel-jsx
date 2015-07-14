# plugin-babel-jsx
SystemJS plugin that uses Babel for jsx transformation.  Includes hot reload for React components.

## Installation
```
jspm install jsx=github:loggur/plugin-babel-jsx@1.0.2
```

## Example config to import using only ".jsx" instead of ".jsx!"
```js
System.config({
  "baseURL": "./",
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "stage": 0,
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  "packages": {
    ".": {
      "defaultExtension": "js",
      "main": "src/main",
      "meta": {
        "*.jsx": {
          "loader": "jsx"
        }
      }
    }
  }
});
```