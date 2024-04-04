const http = require('http');
const queryString = require('querystring');

// Node HTTP
// node http allows node js to transfer data over Hypert text transfer protocol.
// HTTP can create an HTTP server that listen to server ports and gives response back to client.

// with use of createServer() method we can create an HTTP server.
// Here we create a server an store into a variable.
const server = http.createServer((request,response)=>{
    // Here request has a url property called "url" it holds the part after the domain name.
    if(request.url=='/greeting') return handleGreetingRequest(request,response);
    if(request.url=='/json') return handleJsonRequest(request,response);
    if(request.url.match('/echo')) return handelEcho(request,response);
    if(request.url.match('/userdata')) return handleUserData(request,response);

    resourseNotFound(request,response)
})

// Now the  server listen to the server port 8000.
server.listen(8000,()=>{
    console.log(`Server is running on 8000`);
})

function handleUserData(request,response){
    let data = '';
    if(request.method=='POST'){
        request.on('data',(input)=>{
            data = data+input//reading data from the body of the request.
            console.log('reading data'+data);
        })
    request.on('end',()=>{
        console.log('data is ready completely');
        response.end(data);
    })
    request.on('error',(err)=>{
        console.log(err);
    })
    console.log(data);
    }else{
        response.statusCode=405;
        response.end('METHOD NOT ALLOWED');
    }
}
function handelEcho(request,response){
    let value = '';

    // In queryString package parse method split the query string into readable part.
    const {input} =queryString.parse(value+request.url.split('?').slice(1));

    // If we want the response as particular type like plain txt,HTML,json we must include http setHeader() method with specified content type.
    // Here the specified content type json so that response will in json format.
    response.setHeader('Content-Type','application/json')
    response.end(JSON.stringify({
        'normal':input,
        'capitalize':input.toUpperCase(),
        'contentLength':input.length,
        'reverse':input.split('').reverse().join('')
    })) 
}

function handleGreetingRequest(request,response){
    console.log(request.METHOD);

    if(request.method === 'GET'){
        response.setHeader('Content-Teype','text/plain')
        response.statusCode = 201;
        response.statusMessage = 'OK'
        response.end('Hello Welcome to Node JS');
    }else{
        response.statusCode = 405;
        response.statusMessage = 'METHOD-NOT-ALLOWED'
        response.end('Method not allowed');
    }
    
}
function handleJsonRequest(request,response){
    response.setHeader('Content-Teype','text/json')
    response.end(JSON.stringify({name:'Jhon',age:18}));
}
function resourseNotFound(request,response){
    console.log(response);
    response.statusCode = 404;
    response.statusMessage = 'NOT FOUND'
    response.end('REQUWSTED RESOURCE NOT FOUND');
}
