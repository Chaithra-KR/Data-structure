let array = [1,2,3,4,5,6]
let num = 1
let length = array.length
let sum =0
while (num <= length) {
    sum = sum + array[num-1]
    num = num + num
}
console.log(sum)
