# TME
work in progress

A command line tool to run in other projects for testing and built from scratch.
Testing framework - used to test node app.

---
# For Sample Project
## TESTING Node-based CLI framework
- run command line npm init -y to download package.json file
- input test requirements in both index.js file and package.json file
- then run command line npm link to be able to use tme as test framework 

---

## Test Implementation
- file collection: find all files ending in test.js recursively through a folder
- test environment setup: store a reference to each file found
- test file execution: execute them one by one
- report results

---
# For Sample Web Project
## Installations
- install [jsdom](https://www.npmjs.com/package/jsdom) to load code for application to test

## Script Execution Delay
- Tell JSDOM to load index.html
- JSDOM fetches HTML file and parses it. Once complete, 'fromFile' promise resolved and returns DOM object --> JSDOM loads index.js file and executes code
- test runs
- submit check form, check h1 element
