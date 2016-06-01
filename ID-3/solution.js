function isPrime(num) {
  var limit = Math.sqrt(num);
  for ( var i = 2; i <= limit; i++) {
    if (num % i === 0 ) {
        return false;
    }
  }
  return true;
}

function generatePrimeList(limit) {
  var primes = [false, false];
  var length = Math.sqrt(limit);
  for ( var p = 2 ; p * p <= limit; p++) {
    if (primes[p] === undefined){
      primes[p] = true;
      for ( var k = p + p; k <= length; k = k + p)
        primes[k] = false;
    }
  }
  return primes;
}


function maxPrimeFactor(num) {
  var primes = generatePrimeList(num);
  var ind = 2;
  var result = -1;
  while(num !== 1) {
    
    while(primes[ind] === false) {
      ind++;
    }
    
    while(num % ind == 0) {
      num = num / ind;
    }
    result = ind;
    ind++;
  }
  return result;
}

console.log(maxPrimeFactor(600851475143));
