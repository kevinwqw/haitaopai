const fs = require('fs');
const path = require('path');
const getConfig = require('../../common/config');

const fileMap = {};

const getFileUrl = function ({ name, file }, prefix = '', parentFolder = 'public') {
    const key = `${parentFolder}/${name}/${file}`;
    let value = fileMap[key];
    if (value) {
        return value;
    }

    const { rootDirectory } = getConfig();
    const moduleAssetFolder = path.join(rootDirectory, parentFolder, 'assets', name);
    if (!fs.existsSync(moduleAssetFolder)) {
        return null;
    }
    const directories = fs
        .readdirSync(moduleAssetFolder, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .map((dir) => dir.name);
    if (directories.length < 1) {
        return null;
    }

    let version = null;
    if (directories.length === 1) {
        [version] = directories;
    } else {
        version = directories.sort()[directories.length - 1];
    }

    value = `${prefix}/assets/${name}/${version}/${file}`;
    fileMap[key] = value;
    return value;
};

module.exports = {
    getFileUrl
};
