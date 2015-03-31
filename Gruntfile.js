/* jshint node:true */
'use strict';
module.exports = function (grunt) {

  var config = {
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['specs/**/*.js']
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['default'],
        options: { spawn: true, },
      },
    },
  };

  // load plugins
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', 'mochaTest');

  grunt.initConfig(config);
};
