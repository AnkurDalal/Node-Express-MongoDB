const http=require('http')
http.createServer((req,resp)=>{
    resp.write('<h1>Hello Welcome to the Basic Server</h1>')
}).listen(5000)