const http = require('http');
const queryString = require('querystring');

const server  = http.createServer((request,response)=>{
    if(request.url.match('/echo'))return handleEcho(request,response);
    if(request.url.match('/userdata')) return handleUSerData(request,response);
    recordNotFound(request,response);

})

server.listen(8000,()=>{
    console.log('Server is running on 8000');
});
function handleEcho(request,response){
    let value = '';
    console.log(queryString.parse(request.url.split('?').slice(1)));
    const {input} = queryString.parse(value+request.url.split('?').slice(1));
    response.setHeader('Content-Type','application/json');
    response.statusCode = 200;
    response.statusMessage = 'OK';
    response.end(JSON.stringify({
        'normal':input,
        'capitalize':input.toUpperCase(),
        'length':input.length,
        'reversed':input.split('').reverse().join('')
    }))
    console.log(input);
}

function handleUSerData(request,response){
    if(request.method=='POST'){
        let data = '';
        request.on('data',(input)=>{
            data = data+input;
        });
        request.on('end',()=>{
            console.log('data is ready completely');
            response.setHeader('Content-type','text/plain')
            response.end(data);
        });
        request.on('error',(err)=>{
            console.log(err);
        })
        console.log(data);
       }else{
        response.statusCode = 405;
        response.statusMessage = 'METHOD NOT ALLOWED'
    }
}
function recordNotFound(request,response){
    response.setHeader('Content-Type','text/plain');
    response.statusCode = 404;
    response.statusMessage = 'NOT FOUND';
    response.end('Resourse not found');
}