// fibonacci dizisinin n sayısını array olarak yazdırmak

const fibonacci = (n) => {
  const fibonacciArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
  }
  return fibonacciArray;
};

const n = 8;
console.log(`Array formatında Fibonacci dizisinin ilk ${n} sayısı:`);
console.log(fibonacci(n));
