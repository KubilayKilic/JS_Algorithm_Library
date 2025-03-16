// Faktöriyel hesaplama fonksiyonu
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 0 ile 8 arasında rastgele bir tam sayı üretme
let randNum = Math.floor(Math.random() * 8);

// Rastgele sayının faktöriyelini hesapla ve sonucu yazdır
const result = factorial(randNum);
console.log(`Faktöriyel(${randNum}) = ${result}`);

// Fibonacci dizisinin m adımı
const fibonacci = (m) => {
  let fibArr = [0, 1];

  for (let i = 2; i < m; i++) {
    newVals = fibArr[i - 2] + fibArr[i - 1];
    fibArr.push(newVals);
  }
  // use map
  const mappedFib = fibArr.map((num) => num);
  // use filter
  const filtFib = fibArr.filter((num) => num >= 5);
  // use find
  const findFib = fibArr.find((num) => num >= 5);
  // use reduce
  const reducedFib = fibArr.reduce((prev, next) => prev + 1 * next);
  // use some
  const someFib = fibArr.some((num) => num >= 7);
  // use every
  const everyFib = fibArr.every((num) => num >= 0);

  return {
    "Mapped Array sonucu: ": mappedFib,
    "Filtered Array result: ": filtFib,
    "Find sonucu: ": findFib,
    "Reduced Array: ": reducedFib,
    "Some sonucu: ": someFib,
    "Every sonucu: ": everyFib,
  };
};

const fibResults = fibonacci(12);
console.log(fibResults);

// İki sayı arasındaki en büyük ortak böleni bulan bir fonksiyon nasıl yazılır?

const obebBul = (a, b) => {
  let obeb = 0;

  if (b === 0) {
    obeb = a;
  } else {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    obeb = a;
  }
  return obeb;
};

const result2 = obebBul(11, 44);
console.log(result2);
