'use strict'

var fs = require('file-system');

module.exports = function(options) {
    function getImgFile(modulePath) {
        var json = JSON.parse(fs.readFileSync(modulePath + '/package.json'));
        var find = false;

        for (var file in json.files) {
            var path = modulePath + "/" + json.files[file];

            if (fs.existsSync(path) && fs.statSync(path).isDirectory()) {
                fs.recurseSync(path, ['**/*.{jpg,jpeg,gif,png,svg}'], function(filepath, relative, filename) {
                    keys.push(filepath);
                });
            }
        }
    };

    function addImgFile(key) {
        getImgFile(options.nodeModulesPath + "/" + key);
    }

    options = options || {};

    if (!options.nodeModulesPath) {
        options.nodeModulesPath = './node_modules';
    }

    if (!options.packageJsonPath) {
        options.packageJsonPath = './package.json';
    }

    if (!options.devDependencies) {
        options.devDependencies = false;
    }

    var buffer,
        packages,
        keys;

    keys = [];

    if (fs.existsSync(options.packageJsonPath)) {
        buffer = fs.readFileSync(options.packageJsonPath);
        packages = JSON.parse(buffer.toString());

        for (var key in packages.dependencies) {
            addImgFile(key)
        }
        
        if (options.devDependencies) {
            for (var key in packages.devDependencies) {
                addImgFile(key)
            }
        }
    }

    return keys;
}
