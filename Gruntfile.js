module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
	browserify : {
	    test: {
		src: ['test/front-end/unit/**/*.js'],
		dest: 'test/front-end/test-suite.js'
	    }
	}
    });
};
