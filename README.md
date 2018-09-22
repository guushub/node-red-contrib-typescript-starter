# Node-RED typescript template
Basic starter template for Node-RED node development with typescript.

## Installation

### Install dependencies
Install global dependencies:
```
npm install typescript -g
npm install gulp -g
```

CD into the project folder and:
```
npm install
```

### Edit package.json
* Edit ```package.json``` to change the name of the package and node-red config to match the desired name of the custom node. 
* Change the Node-RED folder in the npm script `deploy:dev` to match the data folder of the Node-RED development environment.


## Usage
Build compiles to javascript (```tsc```), bundles the html files with ```gulp``` and copies these files and the package.json to the dist folder:

```
npm run build
```

## Debug
To install the module in the Node-RED data folder (be sure to have to correct folder set in ```package.json```):
```
npm run deploy:dev
```
When succesfull (re)start Node-RED to see the changes. You should see two nodes in the category "Typescript Starter":
![Alt text](images/typescript-starter.png?raw=true "Typescript Starter") 

TODO: add visual studio code debug method

## Test
TODO: add unit tests

## NPM:
Maybe TODO: add package to NPM, but it doesn't really do anything useful anyway.

## Credits and License
Copyright (c) 2018 Guus Claessen

The MIT License (MIT)

