let array = [1,2,6,4,5]
array.sort(function(a,b){
  return a-b
})
console.log(array);
let target = 8
function binarySearch(){
  let left = 0
  let right = array.length -1
  while (left <= right) {
    let mid = Math.floor( (left+right)/2 )
    if (target ===  array[mid]) {
      return true
    }else if(target > array[mid]){
      left = mid+1
    }else{
      right = mid-1 
    }
  }
  return false
}
console.log(binarySearch());
// O(1) S
// O(log n) T