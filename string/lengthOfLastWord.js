function display(str) {
    let words = str.trim().split(' ')
    let totalLength = words.length-1
    return words[totalLength].length;
}
let str = "hello world"
console.log(display(str));