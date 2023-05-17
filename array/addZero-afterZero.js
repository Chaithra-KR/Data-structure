//if the array have an element zero add zero to the next of the zero, add remove the last element .
// eg: [2,3,4,0,5,6]
//     [2,3,4,0,0,5]

let array = [2,3,4,0,5,6]
function addZero(){
    for (let i = 0; i < array.length; i++) {
        if (array[i]==0) {
           for (let j = array.length; j > i ; j--) {
                array[j] = array[j-1]
           } 
           array[i] = 0
           i++
           array.length--
        }        
    }
    console.log(array);
}
addZero()