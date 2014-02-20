'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.tsdamdconcat = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    defaultopt: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default.d.ts');
        var expected = grunt.file.read('test/expected/default.d.ts');
        test.equal(actual, expected, 'should concat input files by adding declare module "module/path" {}');

        test.done();
    },

    noref: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/noref.d.ts');
        var expected = grunt.file.read('test/expected/noref.d.ts');
        test.equal(actual, expected, 'should remove references when specified in config.');

        test.done();
    },

    basepath: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/basepath.d.ts');
        var expected = grunt.file.read('test/expected/basepath.d.ts');
        test.equal(actual, expected, 'should remove basePath from module path when specified in config.');

        test.done();
    },

    
    prefix: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/prefix.d.ts');
        var expected = grunt.file.read('test/expected/prefix.d.ts');
        test.equal(actual, expected, 'should replace basePath by prefixPath from module path when specified in config.');

        test.done();
    }
};
