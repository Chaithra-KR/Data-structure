
function isPowerOfTwo(n){
    if(n<1) return false;
    return (n & (n-1)) === 0
  }
  console.log(isPowerOfTwo(8));
  //O(1)TS