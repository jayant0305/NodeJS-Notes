const fs=require("fs")

const write=fs.writeFileSync('./test.text',"Hye there")
fs.writeFile('./testAsync.text',"Hye there File Async",(err)=>{

})

const read=fs.readFileSync('./test.text',"utf-8")
fs.readFile('./test.txt','utf-8',(err,res)=>{
    if(err){

    }

    else{

    }
})


fs.appendFileSync('./test.txt',"Hye there")
fs.appendFile('./testAsync.txt',"Hye there File Async")



fs.unlinkSync('./test.txt')
fs.copyFileSync('./testAsync.txt','./copy.txt')

