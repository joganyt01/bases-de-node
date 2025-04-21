import  http  from "http";



const server=http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text-plain'});
    res.end('johanyt');

});

server.listen(2000,()=>{
    console.log(`corriendo servidor http://localhost:2000`);
});
