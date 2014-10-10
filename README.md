# tsdamdconcat

> Create a single definition file from amd definitions

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tsdamdconcat --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tsdamdconcat');
```

## The "tsdamdconcat" task

### Overview
In your project's Gruntfile, add a section named `tsdamdconcat` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    tsdamdconcat: {
        options: {
            // Task-specific options go here.
        },
        your_target: {
            // Target-specific file lists and/or options go here.
        }
    }
});
```

### Options

#### options.basePath
Type: `String`
Default value: `""`

Remove a part of the source file path to allow better AMD configuration

#### options.prefixPath
Type: `String`
Default value: `""`

Replace basePath by prefixPath to allow better AMD configuration

#### options.removeReferences
Type: `Boolean`
Default value: `false`

Allow to remove every `/// <reference path="path/to/ref.d.ts" />` from source files

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
    tsdamdconcat: {
        my_target: {
            src: ['src/*.d.ts', '!src/_definitions.d.ts'],
            dest: 'dest/result.d.ts'
        }
    }
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
    tsdamdconcat: {
        my_target: {
            options: {
                basePath: 'src',
                prefixPath: 'libname',
                removeReferences: true
            },
            files: {
                'dest/result.d.ts': ['src/*.d.ts', '!src/_definitions.d.ts'],
            }
        }
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 Initial Release
0.1.1 Fix relative module paths imported inside modules

## License
Copyright (c) 2014 SPATools. Licensed under the MIT license.
