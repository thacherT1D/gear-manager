## Gear Manager React Native Application


Updates:
Using `expo init` rather than `react-native init`


To fix `react.default.memo is not a function` error specify `react-redux@6.0.0` OR in the `package.json` file `"react-redux": "6.0.0"`

Use *yarn* over *npm* to manage dependencies, specifically with react-redux it solved some problems, when in doubt `$ rm -rf node_modules` and `$ yarn start` again, just remember to update the file path for the `App.js` file.

To move `App.js` file into `src` folder, the `node_modules > expo > AppEntry.js` needs to be updated to look for `App.js` in the src directory instead of in the root directory.
[ X ]--> find real way to address this that doesn't involve editing a file in a node_module
[  ] Add storybook and storybook-deployer

Next time:
try using redux-form

splash screen icon credit: [Freepik](https://www.freepik.com/) from [www.flaticon.com](https://www.flaticon.com/), licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
