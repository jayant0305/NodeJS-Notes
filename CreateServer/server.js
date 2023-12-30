const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url);
    switch(req.url){
        case '/':res.end('Home Page')
        break;
        case '/profile':res.end('I am Jayant')
        break;
        default :res.end('404 Not Found');
    }
})  

server.listen(8000,()=>{
    console.log('listening on PORT 8000')
})