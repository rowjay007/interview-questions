function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

//solution with es6
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}
