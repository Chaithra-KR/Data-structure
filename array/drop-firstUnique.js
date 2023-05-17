let array = [1,2,3,1,2,5]
function firstUnique(){
    for (let i = 0; i < array.length; i++) {
        let isUnique = true
        for (let j = 0; j < array.length; j++) {
            if (i!==j && array[i] ===array[j]) {
                isUnique = false
                break
            }          
        }
        if (isUnique) {
           return array[i]
        }

    }
}
const hai = firstUnique()
console.log(hai);