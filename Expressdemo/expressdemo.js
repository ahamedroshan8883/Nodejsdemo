const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.listen(8000,()=>{
    console.log('Server is running on 8000');
})
app.get('/',(request,response)=>{
    response.end("hiii hello")
})
let items = [
    { id: 1, name: "parker pen", price: 200 },
    { id: 2, name: "Eraser", price: 5 },
    { id: 3, name: "Pencil", price: 10 },
    { id: 4, name: "sharpner", price: 5 },
    { id: 5, name: "water can ", price: 50 },
  ];
app.get('/api/items',(request,response)=>{
    response.json(items);
})
app.post('/api/additems',(request,response)=>{
    const {name,price} = request.body;
    let newitems = {id:items.length+1,name:name,price:price};
    items.push(newitems);
    response.end("New items added");
})
app.delete('/api/item/:id',(request,response)=>{
    const id = request.params.id;
    items = items.filter(item=>item.id!=id);
    response.json(items);
})