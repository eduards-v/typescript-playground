# TypeScript and Node JS playground

This repository is created to practice Node JS environment setup and TypeScript language.

## 1. Quick Setup

Create project directory and initiate Node application from console: `npm init`

Enter basic information about a project to proceed with initialization.
This will generate a file `package.json` where you can describe application,
include dependencies, set entry points, configure ports and [much more about `package.json`](https://docs.npmjs.com/files/package.json)...

Install TypeScript using `npm install -g typescript` command.
Because TypeScript is install globaly, we need to link it to
an npm using this command `npm link typescript`.

Next we need to install types definitions for TypeScript node libraries,
so that it can provide type checking when we writting the code in favorite editor. 

`npm install @types/node --save-dev`

Now we also have node_nodules in project directory to access types definitions.
Add reference to it in our application's `package.json`: 

`"devDependencies": {
    "@types/node": "^8.0.31"
}`

Create a file `tsconfig.json` to configure TypeScript compiler:

`{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "baseUrl": ".",
        "paths": {
            "*": [
                "node_modules/*",
                "src/types/*"
            ]
        }
    }
}`
   
Note property `"target"` is set to es5. Why not es6 or higher standards? Browsers like IE or old mobile browsers don't support javascript technologies higher than es6, as well as, some console compilers.

Property `"paths"` describes roots to directories with resources. 
`"src/types/*"` directory will contain TypeScript files and will
produce `*.js` files into `dist` directory specified in `"outDir"` property. 

To compline `.ts` files into `.js`, use command `tsc` in you project's root
directory. 

## 2. Bundling TypeScript using Webpack

Webpack is a technology that allows us to "bundle" or merge our modules with
it's dependencies into generated static assets representing those modules.

To use a webpack we need to install it `npm install -g typescript`.
This will install webpack globally. When you are building a real application, it’s more advisable to install webpack as a devDependency of your project.

To configure a webpack, we have to create `webpack.config.js` file.
In this file we would specify directories where our Typescript source files
located, which file is an entry point for application and where to output bundled `*.bundle.js` file.



To make Webpack understand TypeScript, we need to install TypeScript Loader into
out project: 
`npm install ts-loader --save`

In `webpack.config.js`, we have to add some new options.
What file extensions Webpack should resolve: 
`  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  }
`

and which loader to use (there is few open source ts loaders on github): 
`  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
`

Note that webpack will produce `bundle.js` file to `*/dist` directory,
so this file will become a new entry point for our application.
Change property `"main": "index.js" ` in `package.json` to `"main": "bundle.js"`.
Change script link in `index.html` to point to `bundle.js` as well.


If everything is set up right, run the `webpack`. Now `*/dist` directory should 
contain a new file `bundle.js`.


