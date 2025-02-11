// iki arrayin farkını, array olarak küçükten büyüğe doğru yazdırmak

const birinciArray = [1, 3, 5, 7, 9];
const ikinciArray = [0, 2, 4, 6, 8];

const arrayFark = (arr1, arr2) => {
  const farkArr = [];

  const helperFunction = (first, second) => {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        farkArr.push(first[i]);
      }
    }
  };
  helperFunction(arr1, arr2);
  helperFunction(arr2, arr1);

  return farkArr.sort((a, b) => a - b);
};

console.log(
  `${birinciArray} ve ${ikinciArray} iki arrayde de ortak olmayan sayılar aşağıdadır.`
);
console.log(arrayFark(birinciArray, ikinciArray));
