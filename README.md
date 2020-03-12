## About the front-end test - Part 2

Here is the solution for the task as per https://gist.github.com/is-emmanuelo



### Running the code

The code is written in ES5. This means there are no import/export statements. The modules are handled the good ol' fashioned way.
There is no server required to run this code

#### To see the function do its job
When in the folder with this project just run the following command:
* `node index.js`

The `index.js` file contains a `console.log` statement, which will print the modified object to the terminal. The `index.js` module exports the function so that it can be used inside other apps. Not part of the requirements, but just wanted to deliver code that is usable with other code.
