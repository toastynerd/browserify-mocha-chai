Testing front end code with browserify and mocha/chai
=======================================================
In order to test first run `grunt browserify:test` which will create the 
test-suite.js file from all of the .js files located in test/front-end/unit.
After that open test.html in a browser and there should be two passing tests.
To run tests on the command line run `grunt test`, this will build the same 
test-suite with browserify and run grunt-simple-mocha on that file.