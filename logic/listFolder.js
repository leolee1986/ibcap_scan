const fs = require('fs');
const path = require('path');

const folderPath = "./test";

//const dirs = p => fs.readdirSync(folderPath);
function dirs() {
    return fs.readdirSync(folderPath);
}

module.exports.dirs = dirs;
// dirs(), is an object that contained ./test folder's folder, wouldn't list subfolder.
// console.log(dirs());