let array1 = [1,2,3,4,5,6]
let array2 = [1,4,9,16,25,36,8]
let count = 0
function ifSquareRootOrElse(){
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if(array1[i]*array1[i]==array2[j]) {
           count++ 
           break
        }       
    }
    
}
    if (array1.length ==count && array2.length==count) {
        console.log(true);
    }else{
        console.log(false);
    }
}
ifSquareRootOrElse()
