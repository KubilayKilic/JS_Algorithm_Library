// Bir dizi sayıyı 2 ile çarpan map() örneği
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// map() ile nesne dizisini dönüştürme
const users = [
  { name: "Ali", age: 25 },
  { name: "Ayşe", age: 30 },
  { name: "Mehmet", age: 35 }
];

const userNames = users.map(user => user.name);

console.log(userNames); // ["Ali", "Ayşe", "Mehmet"]
