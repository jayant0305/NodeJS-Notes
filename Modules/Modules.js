/* MODULES IN NODEJS */
const Math=require('./Math')
console.log(Math.Add(2,3))
console.log(Math.Sub(2,3))


const {Add,Sub}=require('./Math')
console.log(Add(2,3))
console.log(Sub(2,3))