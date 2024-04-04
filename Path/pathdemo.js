const path = require('path');
const fs= require('fs');

console.log(path);
console.log(__dirname);
console.log(__filename);
console.log(path.dirname('/NodejsDemo/areaofcircle.js'));
console.log(path.basename('/NodejsDemo/areaofcircle.js'));
console.log(path.parse('/NodejsDemo/areaofcircle.js'));
console.log(path.isAbsolute('/NodejsDemo/areaofcircle.js'));
console.log(path.resolve('/NodejsDemo/areaofcircle.js','calculate.js'));
console.log(path.relative('/NodejsDemo/areaofcircle.js','calculate.js'));

let dirpath = path.join(__dirname,'static','Images');
fs.mkdir(dirpath,{recursive:true},(err)=>{
    if(err)console.log(err);
})

fs.appendFile(path.join(dirpath,'mytext.txt'),'Hello...',(err)=>{
    if(err)console.log(err);
})