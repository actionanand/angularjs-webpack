# AngularJS Webpack

A complete, yet simple, starter for AngularJS using Webpack.

This workflow serves as a starting point for building AngularJS (1.x) applications using Webpack 2.x. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/actionanand/angularjs-webpack.git --branch 1-skeleton-base

# alternate way to clone without git history

$ npx degit https://github.com/actionanand/angularjs-webpack.git#1-skeleton-base angularjs-webpack

# change directory to your app
$ cd angularjs-webpack

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080/](http://localhost:8080/) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080/angularjs-webpack`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)

## Resources

- [Replacement for git clone - degit](https://dev.to/vuelancer/replacement-for-git-clone-degit-3lf1)
- [Bootstrap 3 Official](https://getbootstrap.com/docs/3.3/)
- [angular-ui-router NPM package](https://www.npmjs.com/package/angular-ui-router)
- [How to use index.js file(Properly)](https://dev.to/fahadaminshovon/-how-to-use-indexjs-fileproperly-302f)
- [Using $scope.$watch in ES6](https://stackoverflow.com/questions/36452919/using-scope-watch-in-es6)
- [Angularjs: 'controller as syntax' and $watch](https://stackoverflow.com/questions/24078535/angularjs-controller-as-syntax-and-watch)
- [Digging into Angulars Controller as syntax](https://ultimatecourses.com/blog/digging-into-angulars-controller-as-syntax)
- [angular 1.5 method .name in export angular.module](https://stackoverflow.com/questions/38169651/angular-1-5-method-name-in-export-angular-module)
- [Exploring ES6 Classes In AngularJS 1.x](https://www.michaelbromley.co.uk/blog/exploring-es6-classes-in-angularjs-1.x/)

### Credits

- [AngularJs webpack - github(@preeboot)](https://github.com/preboot/angularjs-webpack)
- [AngularJs webpack demo - github](https://github.com/angular-tips/webpack-demo)
- [Using AngularJS with ES6 and Webpack](http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/)