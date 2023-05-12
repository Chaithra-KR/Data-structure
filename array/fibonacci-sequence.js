const  read = require("readline-sync")
let limit = read.question("Enter the limit")
function fibonacci(){
   
    let fib=[0,1]
    for(let i=2;i<limit;i++){  //O(n)TS
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}
console.log(fibonacci())


0,1,1,2,3,5