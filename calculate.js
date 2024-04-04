const area_of_circle = require("./areaofcircle");
const {add,sub} = require("./arethmetic");
console.log(area_of_circle(3));
let radius = process.argv[2];
console.log(area_of_circle(radius));

let num1 = process.argv[2];
let num2 = process.argv[3];
console.log(add(num1,num2));
console.log(sub(num1,num2));
