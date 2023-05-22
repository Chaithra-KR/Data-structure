// convert the array into string and add 1 to the string.Then convert string into array elements.
// eg: array = [1,2,3]
//     resultArray = [1,2,4]

let array = [9,9,9]
let num = 0
let sum = 0
function arrayToString(){
    for (let i = 0; i < array.length; i++) {
        num =num*10+array[i]        
    }
    sum = num + 1
    console.log(typeof sum);
    let resultArray = Array.from(String(sum),Number)
    console.log(resultArray);
}
arrayToString()