let array = [1,2,3,4,5]
let target = 0
function linearSearch(){
    for (let i = 0; i < array.length; i++) {
    if (array[i]=== target) {
        return true
    }        
    }
    return false
}
console.log(linearSearch());
// O(n)T O(1)S
