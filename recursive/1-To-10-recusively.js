function display(n,m) {
    if (n <= m) {
        console.log(n);
     display(n+1,m)
    }
    
}
display(1,10)