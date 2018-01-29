const fs = require('fs');
const path = require('path');

const folderPath = "./test";

const dirs = p => fs.readdirSync(folderPath);

// dirs(), is an object that contained ./test folder's folder, wouldn't list subfolder.
//console.log(dirs());