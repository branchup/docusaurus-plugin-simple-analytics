# Simple Analytics Docusaurus Plugin

[Simple Analytics](https://simpleanalytics.com/) plugin for Docusaurus.

## Setup

Install the package `@branchup/docusaurus-plugin-simple-analytics`:

```
npm install --save @branchup/docusaurus-plugin-simple-analytics
```

Or

```
yarn add @branchup/docusaurus-plugin-simple-analytics
```

Then, add the plugin to `docusaurus.config.js`:

```
plugins: [
  ...
  ['@branchup/docusaurus-plugin-simple-analytics', {}],
  ...
],
```

## Options

- The property `domain` lets you specify [your custom domain](https://docs.simpleanalytics.com/bypass-ad-blockers).

**Example**

```
plugins: [
  ...
  ['@branchup/docusaurus-plugin-simple-analytics', {
    domain: 'custom.domain.com'
  }],
  ...
],
```

## Notes

The plugin has no effect in development.

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)