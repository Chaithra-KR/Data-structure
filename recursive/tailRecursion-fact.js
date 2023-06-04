function factorial(n, acc = 1) {
    if (n === 0) {
      return acc;
    }
    return factorial(n - 1, acc * n);
  }
  
  console.log(factorial(5)); // Output: 120
  

//   Tail recursion is a special case of recursion where the recursive
//    call is the last operation performed in a function. 