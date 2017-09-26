# Typescript and Node JS playground

This repository is created to practice Node JS environment setup and Typescript language.

## 1. Quick Setup

    Create project directory and initiate Node application from console:
        `npm init`
    Enter basic information about a project to proceed with initialization.
    This will generate a file `package.json` where you can describe application,
    include dependencies, set entry points, configure ports and [much more about `package.json`](https://docs.npmjs.com/files/package.json)...

    Next we need to install types definitions for typescript node libraries,
    so that it can provide type checking when we writting the code in favorite editor. 

        `npm install @types/node --save-dev`

    Now we also have node_nodules in project directory to access types definitions.
    Add reference to it in our application's `package.json`: 
        `"devDependencies": {
                "@types/node": "^8.0.31"
            }`

   
