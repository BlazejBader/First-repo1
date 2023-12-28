//PODSTAWY FUNKCJI:

// 1. Napisz funkcję dodającą dwie liczby
function sum(a, b) {
  const result = a + b;
  return result;
}
let result = sum(2, 2);

// 2. Napisz funkcję zwracającą długość tablicy
const numberArray = [2, 2, 4, 5, 6];
function check(numberArray) {
  return numberArray.length;
}
check(numberArray);
// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
let b = 41;
function check1(b) {
  let evenNumber =
    b % 2 === 0 ? "to jest liczba parzysta" : "to jest liczba nieparzysta";
  return evenNumber;
}
check1();
// 4. Napisz funkcję obliczającą pole kwadratu
let cos = 5;
function product(cos) {
  return cos * cos;
}
product();

// 5. Napisz funkcję zwracającą odwrotność liczby
let c = 5;
function inverse(c) {
  return 1 / c;
}
inverse();
// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
let temp = 2;
function convert(temp) {
  return temp * 1.8 + 32;
}
convert();
// 7. Napisz funkcję zwracającą pierwszy element tablicy
const array = [3, 4, 6, 7];
function firstElement(array) {
  return array[0];
}
firstElement(array);

// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string

let a = "98347";
let p = "324958";
function conect(a, p) {
  let resu = a + p;

  const types =
    typeof a == "string" && typeof p == "string" ? "string" : "is not string";

  return { resu, types };
}
conect();

// 9. Napisz funkcję zwracającą typ zmiennej
function backType(a) {
  return typeof a;
}

// 10. Napisz funkcję zwracającą absolutną wartość liczby
const licza = -7;
function absolut(liczba) {
  return Math.abs(liczba);
}
absolut();
//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
function view() {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}
view();

// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
const inc = 2;
function eNumber(inc) {
  while (inc < 20) {
    console.log(inc);
    inc += 2;
  }
}

eNumber(inc);

// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
function number() {
  let i = 10;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
}
number();

// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
function breakFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i == 5) {
      break;
    }
  }
}
breakFunction();

// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
const carModel = {
  audi: "A6",
  bmw: "series 5",
  wolkswagen: "passat",
};
function incrementObject(carModel) {
  for (const marka in carModel) {
  }
}
incrementObject(carModel);

// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
const arrayOfNumber = [4, 5, 6, 6, 7];
function incrementArray(arrayOfNumber) {
  for (const numer of arrayOfNumber) {
  }
}
incrementArray(arrayOfNumber);

// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy

function sumArray(arrayOfNumber) {
  let sum = 0;
  for (let sumArray of arrayOfNumber) {
    sum += sumArray;
  }
}
sumArray(arrayOfNumber);
// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków

function reverseContent(string) {
  let str = 1;
  let reversetString = "";
  while (str <= string.length) {
    reversetString += string[string.length - str];
    str++;
  }
  console.log(reversetString);
  return reversetString;
}
reverseContent("scigacz");

// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy

function maxValueArray(arrayOfNumber) {
  let maxi = -Infinity;
  for (let numer of arrayOfNumber) {
    maxi = Math.max(maxi, numer);
  }
  console.log(maxi);
  return maxi;
}
maxValueArray(arrayOfNumber);

// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
function keyValue() {
  for (let marka in carModel) {
    console.log(marka, carModel[marka]);
  }
  return keyValue;
}
keyValue();

//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
function addElement() {
  arrayOfNumber.push(10);
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
addElement();

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
function remLastElement() {
  arrayOfNumber.pop();
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
let removedElement = arrayOfNumber.pop();
console.log(removedElement);
remLastElement();

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
function remFirstElement() {
  arrayOfNumber.shift();
  console.log(arrayOfNumber);
  return arrayOfNumber;
}

console.log(removedElement);
remFirstElement();

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
function addFirstElement() {
  arrayOfNumber.unshift(9);
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
addFirstElement();

// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
function addTwoElemnt() {
  arrayOfNumber.push(10, 11);
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
addTwoElemnt();

// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
function remLastTwoElement() {
  arrayOfNumber.pop();
  arrayOfNumber.pop();
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
remLastTwoElement();
// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
function remFirstTwoElement() {
  arrayOfNumber.shift();
  arrayOfNumber.shift();
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
remFirstTwoElement();

// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
function addFirstTwoElement() {
  arrayOfNumber.unshift(4, 5);
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
addFirstTwoElement();

// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
function addRemLastElement() {
  arrayOfNumber.push(10);
  arrayOfNumber.pop();
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
addRemLastElement();

// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
function addRemFirstElement() {
  arrayOfNumber.unshift(2);
  arrayOfNumber.shift();
  console.log(arrayOfNumber);
  return arrayOfNumber;
}
addRemFirstElement();

// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
const reMapped = arrayOfNumber.map((numer) => numer + 1);
console.log(reMapped);
// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
const filtreArray = arrayOfNumber.filter(function (y) {
  return y % 2 === 0;
});
console.log(filtreArray);
// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
const doubledArray = arrayOfNumber.map(function (x) {
  return x * 2;
});

console.log(doubledArray);
// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
const bigestElement = doubledArray.filter(function (x) {
  return x > 10;
});
console.log(bigestElement);
// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
const string = "jedziemy na wakacje.";
const divaidedString = () => string.split(" ");
console.log(divaidedString());
// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
const countOdd = arrayOfNumber.filter((x) => x % 2 !== 0);
console.log(countOdd);
// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
const arraySquared = arrayOfNumber.map((num) => num * num);
console.log(arraySquared);
// // 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
const newArray = ["dzis", "mam", "wolne"];
const longString = () => newArray.filter((word) => word.length > 3);
console.log(longString());
// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
const bigLatter = newArray.map((text) => text.toLocaleUpperCase());
console.log(bigLatter);
sprint5.js