const fs = require('fs')
const readStream = fs.createReadStream('sample.txt','utf-8');
const WriteStream = fs.createWriteStream('newfile.txt','utf-8');

readStream.pipe(WriteStream);// read stream of bytes and write into writestream (store --> destination)
readStream.on('data',(chunk)=>{
    console.log(chunk);
})
readStream.on('end',()=>{
    console.log('End');
})
readStream.on('error',(error)=>{
    console.log(error);
})
WriteStream.on('error',(error)=>{
    console.log(error);
})