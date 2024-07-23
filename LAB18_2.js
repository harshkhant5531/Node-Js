const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Contact-Type','text/html');

    if(req.url=='/home'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end('<h1>This is my Home section</h1>');
    }

    else if(req.url=='/navbar'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());

    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>This is my About Section</h1>');
    }
    else if(req.url=='/ContactUs'){
        res.statusCode=200;
        res.end('<h1>This is my Contact Us Section</h1>');
    }

    else{
        res.statusCode=404;
        res.end('<h1>Page Not Found</h1>');
    }
})


const port=2077;
server.listen(port,()=>{
    console.log("Server has been started:"+port);
})