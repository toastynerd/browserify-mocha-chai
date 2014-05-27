module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-simple-mocha');

    grunt.initConfig({
	browserify : {
	    test: {
		src: ['test/front-end/unit/**/*.js'],
		dest: 'test/front-end/test-suite.js'
	    }
	},

	simplemocha : {
	    all : 'test/front-end/test-suite.js'
	}
    });

    grunt.registerTask('test', ['browserify:test', 'simplemocha']);
};
