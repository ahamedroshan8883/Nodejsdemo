const express = require("express");
 const app = express();
 const cors = require("cors");// CORS - cross orgin resourse sharing.
 app.use(express.json());// use method in app to add middleware.
 app.use(cors());
 app.get("/",(request,response)=>{
    response.end("Hello World");
 })

 app.get("/echo",(request,response)=>{
    const input = request.query.input;
    console.log(input);
    response.json({
        input:input,
        capitalize: input.toUpperCase(),
        "content-length":input.length,
        reverse: input.split("").reverse().join('')
    });
 })

 app.get("/welcome/:name",(reqest,response)=>{
    const name = reqest.params.name;
    response.end(name);
 })

 app.post('/add',(request,response)=>{
    const {number1,number2} = request.body;
    let sum = number1+number2;
    response.json({
        "number1": number1, 
        "number2": number2, 
        Sum: sum 
    })
 })

 app.post('')

 app.listen(8000,()=>{
    console.log('server is listening to port number 8000 ');
 })