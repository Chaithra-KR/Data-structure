let array = [1,3,4,6]
let userInput = 2
let resultArray = []
function display(){
    let num = 1
    while (num<array.length) {
        for (let i = 1; i < array[array.length-1]; i++) {
            if (array[i]==num){
                num++
            } else{
               resultArray = num
               num++ 
            }            
        }
    }
    for (let i = 1; i < array[array.length-1]; i++) {
        if (userInput == resultArray[i]) {
            return resultArray[i]
            
        }        
    }
}
console.log(display());