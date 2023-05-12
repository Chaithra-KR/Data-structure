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


function isPowerOfTwo(n){
    if(n<1) return false;
    return (n & (n-1)) === 0
  }
  console.log(isPowerOfTwo(8));
  //O(1)TS

