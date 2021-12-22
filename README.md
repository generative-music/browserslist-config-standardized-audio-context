# @generative-music/browserslist-config-standardized-audio-context

A Browserslist configuration which reflects [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) support.

This can be used with other tools like [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) to target the minimum browser versions supported by `standardized-audio-context`.

This package's major version number matches `standardardized-audio-context`. For example, versions of this package starting with "25." are compatible with any versions like "25.x.x" of `standardized-audio-context`. Use the latest version of this package with the same major version number as the verison of `standardized-audio-context` used in your project.

## Usage

1. Install the package:

```bash
npm install --save-dev @generative-music/browserslist-config-standardized-audio-context
```

2. Add `extends @generative-music/browserslist-config-standardized-audio-context` to your browserslist configuration. See [Browserslist Shareable Configs](https://github.com/browserslist/browserslist/tree/32c0ae7106c65ed1e91c57bc174850277065081e#shareable-configs) for more.
