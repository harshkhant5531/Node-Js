const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Contact-Type','text/html');

    if(req.url=='/home'){
        res.statusCode=200;
        const data=fs.readFileSync('home.html');
        res.end(data.toString());
    }

    else if(req.url=='/navbar'){
        res.statusCode=200;
        const data=fs.readFileSync('index1.html');
        res.end(data.toString());

    }
    else if(req.url=='/about'){
        res.statusCode=200;
        const data=fs.readFileSync('about.html');
        res.end(data.toString());
    }
    else if(req.url=='/ContactUs'){
        res.statusCode=200;
        const data=fs.readFileSync('contactus.html');
        res.end(data.toString());
    }
    else if(req.url=='/feedback'){
        res.statusCode=200;
        const data=fs.readFileSync('feedback.html');
        res.end(data.toString());
        
    }
    
    else if(req.url=='/PersonalInformation'){
        res.statusCode=200;
        const data=fs.readFileSync('pF.html');
        res.end(data.toString());
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