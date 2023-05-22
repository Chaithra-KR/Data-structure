let array =[1,2,3,1,2,6]
function firstUniqueElement(){
    for (let i = 0; i < array.length; i++) {
        let Unique = true
        for (let j = 0; j < array.length; j++) {
            if (i!==j && array[i] ===array[j]) {
                Unique = false
            }            
        }
        if (Unique) {
            console.log(array[i]);
            break
        }  
    }
  
 }
firstUniqueElement()