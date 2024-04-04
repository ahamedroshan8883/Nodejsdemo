const fs = require('fs');
console.log("start");
// try{
//     fs.writeFileSync('sample.txt','Poooda vantutan');
//     console.log("Writing file..");
// }catch(error){
//     console.log(error);
// }
// this methods takes three paramethods last one is callback function.
fs.writeFile('sample.txt','Poooda vantutan... "Hardik!"',(error)=>{
    if (error)
    console.log('error '+error);
    else
    console.log('written successfully');
});
console.log('END');
