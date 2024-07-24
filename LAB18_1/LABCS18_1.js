const http=require('http');
const server=http.createServer((req,res)=>{
res.setHeader("content-type","text/html");

if(req.url=="/home"){
    res.end("This is home");
}
else if(req.url=="/content"){
    res.end("This is content")
}
else if(req.url=="/services"){
    res.end("This is services")
}
else{
    res.end("Hello DU");
}
});
const port=5531;
server.listen(port,()=>{
console.log("done",port)
})