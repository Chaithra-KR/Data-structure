// Write a function that takes an array as input and returns the maximum and minimum values in the array.
//  For example, if the input is [4, 2, 9, 1, 7], the output should be (9, 1).

// using spread operator O(n)T,O(1)S
function findMaxMin(array) {
    if (array.length === 0) {
      return null;
    }
  
    const maxValue = Math.max(...array);
    const minValue = Math.min(...array);
  
    return [maxValue, minValue];
  }
  const inputArray = [4, 2, 9, 1, 7];
  const [maxValue, minValue] = findMaxMin(inputArray);
  console.log("Maximum value:", maxValue);
  console.log("Minimum value:", minValue);
    

//without predefined functions  O(n)T,O(1)S
  let array = [4, 2, 9, 1, 7]
  function display(){
      if (array.length === 0) {
          return null;
        }
      let max = array[0]
      let min = array[0]
      for (let i = 1; i < array.length; i++) {
          if (array[i]>max) {
              max = array[i]
          }
          if (array[i]<min) {
              min = array[i]
          }
      }
      return [max,min]
  }
  let show = display()
  console.log(show);
