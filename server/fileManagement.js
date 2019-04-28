const fs = require('fs');
const path = require('path');
const tailDir = require('./tail-dir');

var fileManagement = {};
var tailList = [];

fileManagement.copyNewFiles = () => {
    tailList = tailDir.getTailList();

    fs.readdir(config.sourcePath, (err, files) => {
        if (err) console.error(err);
        var newFiles = files.filter((file) => {
            var extArray = file.split('.');
            var ext = extArray[extArray.length - 1];
            if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'bmp') {
                return !tailList.find((tailFile) => tailFile === file)
            }
            return false;
        });
        fileManagement.copyFiles(newFiles);
    });
};

fileManagement.copyFiles = (newFileList) => {
    newFileList.map(file => {
        var srcPath = path.join(config.sourcePath, file);
        var destPath = path.join(config.destinationPath, file);
        fs.copyFileSync(srcPath, destPath);
        tailList.push(file);
    });
    tailDir.setTailList(tailList);
};

module.exports = fileManagement;