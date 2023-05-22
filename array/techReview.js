let array = [1,2,3,4,5,6]

for (let i = 0; i < array.length; i = i+2) {
    for (let j = 0; j < array[i+2]; j++) {
        console.log(array[i]);
    }    
}