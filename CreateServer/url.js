// https:// GitHub.com/


// 1. protocol - set of rule for communicating with the server
// 2. domain - IP address of server
// 3. path
// 4. nested path
// 5. query parameter

const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico')return res.end()
    const encodedURL=url.parse(req.url,true)
    switch(encodedURL.pathname){
        case '/':res.end('Root');
        break;
        case '/profile':
            const name=encodedURL.query.name;
            console.log(name);
            res.end(`my name is ${name}`);
        break;
        case '/about':
            if(req.method==='GET')res.end('GET');
            else if(req.method==='POST')res.end('POST');
            else res.end('About page');
        break;
        default:res.end('Default');
    }
})
server.listen(4000,()=>{
    console.log('server listening at 4000')
})