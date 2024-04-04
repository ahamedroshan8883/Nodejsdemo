console.log(process);
const fs = require("fs")

process.stdin.setEncoding('utf-8');
process.stdin.on('data',(data)=>{//asynchronous function
    if(data==='exit') console.log('Exited')
    else console.log('entered data '+data);
    fs.appendFile('UserInput.txt',`${data}\n`,(err)=>{
        if(err)console.log('cannot write into the file');
    })
    if(data.trim()==='exit')
    process.exit()
})
process.stdout.write('Hello fro process stdout\n');
process.stdout.write('process stderr\n')
