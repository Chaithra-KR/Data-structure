// Write a function that takes an array as input and returns a new array with the elements reversed.
//  For example, if the input is [1, 2, 3, 4], the output should be [4, 3, 2, 1].

    let array1=[1,2,3,4,5]
    for(let i=array1.length-1;i>=0;i--){
    console.log(array1[i]);    
    }
//O(n)TS

let array = [6,5,4,3,2,1,9]

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        let temp = array[i]
        array[i] = array[j]    
        array[j] = temp   
    }    
}
console.log(array);
//O(n2)TS

let arr = [1,2,3,4]
let j = arr.length-1
for (let i = 0; i < arr.length/2; i++) {
    let temp = array[i]
    arr[i] = arr[j]
    arr[j] = temp
    j--
}
console.log(arr);
//O(n)TS

z