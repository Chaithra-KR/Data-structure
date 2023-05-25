function display(value) {
    let num = value;
    let count = 0;
    while (num >= 1) {
      let mod = num % 10;
      if (value % mod === 0) {
        count++;
      }
      num = Math.floor(num / 10);
    }
    return count;
  }
  console.log(display(126));