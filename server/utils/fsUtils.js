var fs = require('fs');
var path = require('path');

// List all files
async function list(dir) {
    // Get files of directory
    var getFiles = function (dir) {
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (err, files) => {
                if (err) return reject(err);
                resolve(files || []);
            });
        });
    };
    // All files
    var all = [];
    var files = await getFiles(dir);
    for (let i = 0, len = files.length; i < len; i++) {
        // one file path
        let filePath = path.join(dir, files[i]);
        let stat = fs.statSync(filePath);
        if (stat.isFile()) {
            all.push(filePath);
        } else if (stat.isDirectory()) {
            let subFiles = await list(filePath);
            subFiles.forEach(one => {
                all.push(one);
            });
        }
    }
    return all;
}

module.exports = {
    list
}