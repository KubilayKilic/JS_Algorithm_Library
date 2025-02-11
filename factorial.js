// Recursion ile Faktöriyel hesabı

const factorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const n = 5;
console.log(`${n} Faktöriyelin sonucu: ${factorial(n)}`);
