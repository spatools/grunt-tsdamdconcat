/*
 * tsdamdconcat
 * https://github.com/spatools/grunt-tsdamdconcat
 *
 * Copyright (c) 2014 SPATools
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
              'Gruntfile.js',
              'tasks/*.js',
              '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        tsdamdconcat: {

            defaultopt: {
                src: ['test/fixtures/test1.d.ts', 'test/fixtures/test2.d.ts'],
                dest: 'tmp/default.d.ts'
            },

            noref: {
                options: {
                    removeReferences: true
                },
                src: ['test/fixtures/test1.d.ts', 'test/fixtures/test2.d.ts'],
                dest: 'tmp/noref.d.ts'
            },
            
            basepath: {
                options: {
                    basePath: "test/"
                },
                src: ['test/fixtures/test1.d.ts', 'test/fixtures/test2.d.ts'],
                dest: 'tmp/basepath.d.ts'
            },

            prefix: {
                options: {
                    basePath: "test/fixtures",
                    prefixPath: "mylib"
                },
                src: ['test/fixtures/test1.d.ts', 'test/fixtures/test2.d.ts'],
                dest: 'tmp/prefix.d.ts'
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'tsdamdconcat', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
