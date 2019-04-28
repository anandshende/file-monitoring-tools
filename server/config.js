const fs = require('fs');
const path = require('path');

const configFileName = 'config.json';
const configPath = path.join(__dirname, '..', configFileName);

if (fs.existsSync(configPath)) {
    const configJSON = fs.readFileSync(configPath, 'UTF-8');
    global.config = JSON.parse(configJSON);
} else {
    console.error(`config.json file missing at location ${configPath}`);
}