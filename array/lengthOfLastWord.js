// https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150

let str = "hello world !"
function display(str) {
    let words = str.trim().split(' ');
    let totalStringLength = words.length-1
    console.log("Total length" ,totalStringLength);
    return words[totalStringLength].length
}
console.log(display(str));