require('./server/config');
const fileManagement = require('./server/fileManagement');

fileManagement.getNewFileNames()
    .then((newFileNames) => {
        fileManagement.copyFiles(newFileNames);
    });