/* consuming and usage of PATH module */
const path = require('path');
console.log(path.dirname(__dirname)); // gives the path where the folder resides
console.log(path.dirname(__filename)); // gives the path where the file resides
console.log(path.basename(__filename)); // gives the file name with extension
console.log(path.extname(__filename)); // gives the extension of the file
console.log(path.parse(__filename)); // gives the whole object that which we can access that we need

// join - This joins 1 or more paths together
console.log(path.join(__dirname)); // give current folder exact path
console.log(path.join(__dirname, "videos/school/kerala")); // with current path, it also adds the specified path
console.log(path.join(__dirname, "max", "karupu", "ranjan/home")); // added the other additional paths
console.log(path.join(__dirname, '..')); // this will go 1 level up folder
console.log(path.join(__dirname, '..', '..')); // this will go 2 level up folder
console.log(path.join(__dirname, './a_basic.txt')); // gives the folder path and it's mentioned fileName

console.log(path.join(__filename)); // this will give the complete path with the current fileName extension