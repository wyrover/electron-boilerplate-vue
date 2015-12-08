# electron-vue-boilerplate

> Live editing development on desktop app. Based (heavily) on [@chentsulin](https://github.com/chentsulin)'s awesome [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate).

[Electron](http://electron.atom.io/) application boilerplate based on [Vue](https://vuejs.org/), [Vue Router](https://github.com/vuejs/vue-router), [Webpack](http://webpack.github.io/docs/), [Vue Loader](https://github.com/vuejs/vue-loader/) for rapid application development. 


## Install

Install dependencies.

```bash
$ npm install
```

## Run

Run this two commands __simultaneously__ in different console tabs.

```bash
npm run hot-server
npm run start-hot
```

> Note: require node >= 4 and npm >= 2.

#### Toggle Chrome DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

- see [electron-debug](https://github.com/sindresorhus/electron-debug) for more detail information.


## Externals

If you use any 3rd party libraries which can't be built with webpack, you must list them in your `webpack.config.base.js`：

```javascript
externals: [
  // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
]
```

You can find those lines in the file.


## Package

```bash
npm run build
npm run package
```

#### Options

- --name, -n: Application name (default: ElectronReact)
- --version, -v: Electron version (default: latest version)
- --asar, -a: [asar](https://github.com/atom/asar) support (default: false)
- --icon, -i: Application icon
- --all: pack for all platforms

Use `electron-packager` to pack your app with `--all` options for darwin (osx), linux and win32 (windows) platform. After build, you will find them in `release` folder. Otherwise, you will only find one for your os.

`test`, `tools`, `release` folder and devDependencies in `package.json` will be ignored by default.


#### Building windows apps from non-windows platforms

Please checkout [Building windows apps from non-windows platforms](https://github.com/maxogden/electron-packager#building-windows-apps-from-non-windows-platforms).


## License
MIT © [C. T. Lin](https://github.com/chentsulin), [Brad Stewart](https://github.com/bradstewart)

