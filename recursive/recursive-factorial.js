// 1*2*3*4 = 4*3!
let fact = 0
function factorial(n){
    if (n==0) {
        return 1
    }
    return n* factorial(n-1)
}
console.log(factorial(5));

//O(n)TS => complexity