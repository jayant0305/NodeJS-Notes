function Add(a,b){
    return a+b;
}

function Sub(a,b){
    return a-b;
}

module.exports ={
    Add:Add,
    Sub:Sub
}

//DONT use multiple module.exports statements
// Also use exports.add=(a,b)=>{
            // return a+b;
//}