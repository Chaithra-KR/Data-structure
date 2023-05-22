let array = [1,2,3,7,6,0,2]
let largest = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i]>largest) {
        largest = array[i]
    }    
}
console.log(largest);