const fs = require('fs');
const path = require('path');

var tailDir = {};
const configFileName = config.tailDirFileName;
const configPath = path.join(__dirname, '..', configFileName);

tailDir.getTailList = () => {
    if (fs.existsSync(configPath)) {
        console.log(`Found file: ${configFileName}`);
        const tailJSON = fs.readFileSync(configPath, 'UTF-8');
        return JSON.parse(tailJSON).fileList;
    } else {
        console.error(`${configFileName} file missing at location ${configPath}`);
        return null;
    }
};

tailDir.setTailList = (newTailList) => {
    var newFileListJSON = JSON.stringify({ fileList: newTailList });
    fs.writeFileSync(configPath, newFileListJSON);
};

module.exports = tailDir;