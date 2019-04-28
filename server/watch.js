const fs = require('fs');
var watcher = {};

watcher.addWatcher = () => {
    fs.watch(config.sourcePath, (eventType, filename) => {
        console.log('eventType', eventType);
        console.log('filename', filename);
    });
};

module.exports = watcher;