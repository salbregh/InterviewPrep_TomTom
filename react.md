# Notes On React

## Introduction
React is a JS frameform for creating front-end applcations. It allows developers to create fast applications using a programming paradigm that ties JS with an HTML-like syntax known as JSX.

Creat react App includs all the JS packages needed to run a react project. It includes code transpiling, linting, testing, hot reloading and build systems. It will also create a structure for your directories and components so you can jump om amd start coding.

## Prerequisites
- Node.js
*check version by running `node -v`*
- npm
*check version by running `npm -v`*
- Basic JS

### STEP 1.
Create a new application by using the npm package manager to run a remote script.
This will copy necessary files into a new directory and install all dependencies. 

The tool npx (which is included in npm) will run the installation of `create-react-app` into the specified directory. The script will also run `npm install` within the directory, which will download ay additional dependencies.

`npx create-react-app app`

### STEP 2.
Using `react-scripts`, installed within the repo.
1. Run the `test` script to test the code. 
2. Run the `build` script to create a minified version
3. Loko at the `eject` script 

The files installed will be:
```
node_modules/
public/
src/
.gitignore
README.md
package-lock.json
package.json
```

* node_modules/ - contains extenal JS libraries used in the application.
* public/ - contains baic HTML, JSON and image files.
* src/ - contains React JS code for the project.
* package-lock.json - file used by npm to ensure that the packages match exact versions
* package.json - contains metadata about your project: version, title, number, dependencies, and scripts that you can use to run your project. 

#### scripts in package.json
- `start` - starting up local development environment
- `build` - bundles the app into static files for production.
- `test` - starts test runner
- `eject` 

To run any npm script you need to type `npm run script_name`. 

### STEP 3.
Initilize a local server and run the project in your browser.