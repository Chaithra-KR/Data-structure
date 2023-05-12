function recursiveFibonacci(n){
    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
}
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(2));
//O(2^n)T 
//O(n)S because each recursive call creates a new stack frame that takes up memory.