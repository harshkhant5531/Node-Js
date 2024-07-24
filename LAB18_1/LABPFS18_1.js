const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
// res.setHeader("content-type","text/html");

if(req.url=="/home"){
    fs.readFile ('demoHTML.html',(err,data)=>{
        res.write(data);
        res.end();
    })
    
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
const port=1665;
server.listen(port,()=>{
console.log("done",port)
})