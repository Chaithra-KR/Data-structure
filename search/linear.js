let arr =[1,2,3,4]
let target =3
function linear(arr,target) {
    for(let i=0 ; i<arr.length;i++){
        if(arr[i]===target){
            return true
        }
    }
    return false
}
console.log(linear(arr,target));