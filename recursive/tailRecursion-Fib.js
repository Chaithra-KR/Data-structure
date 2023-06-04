function fibonacci(n) {
    function fibonacciHelper(n, a, b) {
      if (n === 0) {
        return a;
      }
      return fibonacciHelper(n - 1, b, a + b);
    }
  
    return fibonacciHelper(n, 0, 1);
  }
  
  console.log(fibonacci(6)); // Output: 8
  