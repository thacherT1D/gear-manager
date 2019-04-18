## Gear Manager React Native Application


Updates:
`expo init` rather than `react-native init`


To fix `react.default.memo is not a function` error specify `react-redux@6.0.0` OR in the `package.json` file `"react-redux": "6.0.0"`

Use *yarn* over *npm* to manage dependencies, specifically with react-redux it solved some problems, when in doubt `$ rm -rf node_modules` and `$ yarn start` again, just remember to update the file path for the `App.js` file.

To move `App.js` file into `src` folder, the `node_modules > expo > AppEntry.js` needs to be updated to look for `App.js` in the src directory instead of in the root directory.



icon credit: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
