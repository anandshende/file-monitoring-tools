const fs = require('fs');
const path = require('path');
const tailDir = require('./tail-dir');

var fileManagement = {};
var tailList = [];

fileManagement.getNewFileNames = () => {
    return new Promise((resolve, reject) => {
        tailList = tailDir.getTailList();

        fs.readdir(config.sourcePath, (err, files) => {
            if (err) reject({ statusCode: 501, msg: err });
            var newFiles = files.filter((file) => {
                var extArray = file.split('.');
                var ext = extArray[extArray.length - 1];
                if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'bmp') {
                    return !tailList.find((tailFile) => tailFile === file)
                }
                return false;
            });
            // console.log(newFiles, JSON.stringify(newFiles));
            resolve(newFiles);
        });
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