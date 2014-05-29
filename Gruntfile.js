module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
		browserify : {
	    test: {
				src: ['test/front-end/unit/**/*.js'],
				dest: 'test/front-end/test-suite.js'
	    }
		},

		simplemocha : {
	    all : 'test/front-end/test-suite.js'
		},

		watch: {
			autoTest: {
				files: ['lib/**/*.js', 'test/front-end/unit/**/*.js'],
				tasks: ['browserify:test', "simplemocha:all"],
				options: {
					spawn: false
				}
			}
		}
  });

  grunt.registerTask('test', ['browserify:test', 'simplemocha']);
	grunt.registerTask('autotest', ['watch:autoTest']);
};
