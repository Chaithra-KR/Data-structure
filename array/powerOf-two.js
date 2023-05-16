function IsPowerOfTwo(num){
    if(num<1){
        return false
    }
    while(num>1){
        if(num%2!= 0){
            return false
        }
        return true
    }
}
console.log(IsPowerOfTwo(4));
// O(log n)T O(1)S


