const child_process = require('child_process');

// java code run
child_process.exec('java HelloWorld.java',(err,stdout,stdin)=>{
    if (err) throw err;
    console.log(stdout);
})

// HTML code not  run
child_process.exec('demoHTML.html',(err,stdout,stdin)=>{
    if (err) throw err;
    console.log(stdout);
})


// directory
child_process.exec('dir',(err,stdout,stdin)=>{
    if (err) throw err;
    console.log(stdout);

})


