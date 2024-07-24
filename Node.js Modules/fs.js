//file system

const fs=require('fs');

//exist
fs.exists('index.html',(data)=>{
    console.log(data);

})

//readFile
fs.readFile('package.json',(err,data)=>{
console.log(data.toString());
})

//WriteFile
fs.writeFile('demo.txt','Darshan University',(err,data)=>{
    console.log("Successfully data Write in The demo file");
    })

//CopyFile
fs.copyFile('demo.txt','CopiedFile.txt',(err,data)=>{
    console.log("File Copied!!");
    })

//AppeendFile
fs.appendFile('demo.txt',' Marwadi University',(err,data)=>{
    console.log("File Appended!!");
    })

//rename File
fs.rename('demo.txt','newDemo.txt',(err)=>{
    if (err) throw err;
    console.log('Rename complete!');
})

