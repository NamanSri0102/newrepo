const {readFile,writeFile} =require('fs')

console.log('start');



readFile('./subfolder/first.txt','utf8',(err,result)=> {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;

        }
        const second =result;

        writeFile('./subfolder/result-async.txt',
            `here is the result: ${first} , ${second}`
        ,(err,result)=>{
            if(err){
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log('starting the next task')


//async me pehle dono console log output hue fir uske baad ye read aur write wala function chalega