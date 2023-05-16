  
  function IsPrime(n){
    let primes=new Array(n+1).fill(true)
    for(let i = 2; i <=Math.sqrt(n) ;i++){
      if(primes[i]==true){
        for(let j=i*2;j<=n;j=j+i){
          primes[j]=false
        }
      }
    }
    for(let i=2;i<=n;i++){
      if(primes[i]==true){
        console.log(i);
      }
    }
  }
  IsPrime(100)

  // O(n*log(log(n)))T because it uses the Sieve of Eratosthenes algorithm to generate all prime numbers up to n
  //O(n)S

