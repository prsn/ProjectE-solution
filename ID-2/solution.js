function fibo ( x, y) {
  if ( x > 4000000 )
    return 0;
  return y + fibo (2 * y + x, 3 * y + 2 * x);
}

console.log(fibo(1,2));