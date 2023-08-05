// A array of integers numbers and an integer target, return indices of the two numbers such that they add up to target.

let numbers = [2,7,11,15]
let target = 9
function display(numbers,target) {
    for (let i = 0; i < numbers.length-1; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i]+numbers[j] === target) {
                console.log([i,j]);
            }            
        }        
    }
    return false
}
display(numbers,target)