# TME Testing Framework

A testing framework to test node applications utilizing the command line tool. Simply run command line ```tme```.

---

# For Sample Project Folder
## TESTING Node-based CLI Framework
- Run command line ```npm init -y``` to download package.json file
- Input test requirements in both index.js file and package.json file
- Run command line ```npm link``` to be able to use command ```tme``` as test framework 

---

## Test Implementation
- File collection: find all files ending in test.js recursively through a folder
- Test environment setup: store a reference to each file found
- Test file execution: execute them one by one
- Report results

---
# For Sample Web Project Folder
## Installations
- Install [jsdom](https://www.npmjs.com/package/jsdom) to load code for application to test

## Script Execution Delay
- Tell JSDOM to load index.html
- JSDOM fetches HTML file and parses it. Once complete, 'fromFile' promise resolved and returns DOM object --> JSDOM loads index.js file and executes code
- Test runs
- Submit check form which checks h1 element
