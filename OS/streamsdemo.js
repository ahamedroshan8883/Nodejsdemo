const stream = require('stream')
const fs = require('fs');

const tunnel = new stream.PassThrough() //it is a type of duplex stream
const readStream = fs.createReadStream('newfile.txt') //read the content from this file.
const writestream = fs.createWriteStream('copynewfile.txt') //write the content to this file.

tunnel.on('data',(data)=>{
    console.log(data.toString());
})
readStream.pipe(tunnel).pipe(writestream)//read stream -> tunnel ->write Stream.

readStream.on('error',(error)=>{
    console.log((error));
})
writestream.on('error',(error)=>{
    console.log(error);
})