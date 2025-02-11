const isPrime = (n) => {
  if (n < 2) return false; // 2'den küçük sayılar asal değildir (n<=1)
  if (n === 2) return true; // 2 asal sayıdır.
  if (n % 2 === 0) return false; // Çift sayılar asal değildir.

  // 3'ten başlayarak sayının kareköküne kadar olan tek sayıları kontrol.
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

const primeInRange = (start, end) => {
  const asalSayılarArr = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      asalSayılarArr.push(i);
    }
  }
  return asalSayılarArr;
};

// Örnek kullanım:
const start = 100;
const end = 200;
const asalSayılar = primeInRange(start, end);

console.log(`${start} ile ${end} arasındaki asal sayılar:`);
console.log(asalSayılar);

// Örnek kullanım:
const number = 29; // Kontrol edilecek sayı
if (isPrime(number)) {
  console.log(`${number} asal sayıdır.`);
} else {
  console.log(`${number} asal sayı değildir.`);
}
