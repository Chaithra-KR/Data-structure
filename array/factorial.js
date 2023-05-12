let num=6
function factorial(){
    
    let fact=1
    for(let i=1 ; i<=num ; i++){    //O(n)T O(1)S
        fact = fact*i
    }
    return fact
}

console.log(factorial());

// 1*2*3*4*5*6