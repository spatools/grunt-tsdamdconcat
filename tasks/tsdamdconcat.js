/*
 * tsdamdconcat
 * https://github.com/spatools/grunt-tsdamdconcat
 *
 * Copyright (c) 2014 SPATools
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    var path = require("path"),
        lf = grunt.util.linefeed;
    
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    
    grunt.registerMultiTask('tsdamdconcat', 'Create a single definition file from amd definitions', function () {
        var cwd = process.cwd(),
            modulePath, moduleContent, moduleDir, 

            // Merge task-specific and/or target-specific options with these defaults.
            options = this.options({
                basePath: "",
                prefixPath: "",
                removeReferences: false,
                banner: null
            });
        
        // Iterate over all specified file groups.
        this.files.forEach(function (file) {
            var result = file.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                }
                else {
                    return true;
                }
            })
            .map(function (filepath) {
                modulePath = filepath.replace(options.basePath, options.prefixPath).replace(".d.ts", "");
                moduleDir = path.dirname(modulePath);
                
                moduleContent = grunt.file.read(filepath);
                moduleContent = moduleContent.replace(/declare\s+/g, "");
                
                moduleContent = moduleContent.replace(/(\.+\/[^"]+)/g, function (match) {
                    return path.relative(cwd, path.resolve(moduleDir, match)).replace(/\\/g, "/");
                });
                
                moduleContent = grunt.util.normalizelf(
                                "declare module \"" + modulePath + "\" {" + lf +
                                    moduleContent +
                                "}" + lf);
                
                return moduleContent;
            })
            .join(lf);
            
            result = grunt.util.normalizelf(result);
            
            if (options.removeReferences) {
                result = result.replace(/\/{3}\s*<reference [^>]*>\s*/g, "");
            }
            
            if (options.banner) {
                result = banner + lf + result;
            }
            
            // Write the destination file.
            grunt.file.write(file.dest, result);
            
            // Print a success message.
            grunt.log.ok('File "' + file.dest + '" created.');
        });
    });
};
