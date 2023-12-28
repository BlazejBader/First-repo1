//   ZAD 1
// Dane wejściowe
const people = [
  { firstName: "Alicja", lastName: "Kowalska" },
  { firstName: "Jan", lastName: "Nowak" },
  { firstName: "Halina", lastName: "Malina" },
];

//  Napisz funkcję, która przetwarza każdą osobę w tablicy people w następujący sposób:
function procesPerson(person) {
  //  a) Dla każdego imienia, weź ostatnie 3 litery, odwróć ich kolejność i zapisz do zmiennej.

  const namePart = person.firstName
    .slice(-3)
    .split("")
    .reverse("")
    .join("")
    .toLowerCase();

  //  b) Dla każdego nazwiska, weź pierwsze 3 litery, zamień miejscami pierwszą i ostatnią literę, i dołącz do zmiennej utworzonej w punkcie a).

  const partSurname = person.lastName
    .slice(0, 3)
    .split("")
    .reverse("")
    .join("")
    .toLowerCase();
  let nickName = namePart + partSurname;
  //  c) Zmień wielkość liter w taki sposób, aby ostateczny pseudonim (nickname) zaczynał się wielką literą, a reszta liter była mała.
  nickName = nickName.split("");
  nickName[0] = nickName[0].toUpperCase();
  nickName = nickName.join("");
  //  d) Jeśli liczba znaków w imieniu lub nazwisku jest mniejsza niż 2, pseudonim będzie odpowiednio krótszy.

  if (namePart.length < 2 && partSurname.length < 2) {
    nickName = nickName.slice(0, namePart.length + partSurname.length);
  }

  return { ...person, nickName };
}

const procesPeople = people.map((person) => procesPerson(person));
// console.log(people1);

// //    Dodaj pole age, które jest wyliczane na podstawie sumy liter w imieniu i nazwisku. Jeżeli ilość liter w imieniu i
// //                 nazwisku jest parzysta to wiek będzie będzie wyliczany, na postawie długości kluczy znajdujących się w obiekcie pomniejszone o długość imienia.
// // // ZAD 2 //

// Dane wejściowe
// const people1 = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok",
//   },
//   {
//     firstName: "Jan",
//     lastName: "Nowak",
//     nickname: "Najwon",
//   },
//   {
//     firstName: "Halina",
//     lastName: "Malina",
//     nickname: "Anilam",
//   },
// ];
function age1(person) {
  let age = person.firstName.length + person.lastName.length;
  const keys = Object.keys(person);
  const totalLength = keys.reduce((sum, key) => sum + key.length, 0);

  if (age % 2 !== 0) {
    age = age;
  } else {
    age = totalLength - person.firstName.length;
  }
  return { ...person, age };
}

const people2 = people1.map(age1);

console.log(people2);

//                      Zad 3

// Dane Wejściowe
const people3 = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
    age: 19,
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
    age: 22,
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
    nickname: "Ramlam",
    age: 17,
  },
];

function addIntroduce(person) {
  introduceYourself = function welcome() {
    return `Cześć jestem ${this.firstName} ${this.lastName}, w szkole mówią na mnie ${this.nickname}.`;
  };

  return { ...person, introduceYourself };
}
const people4 = people3.map(addIntroduce);

people4.forEach((person) => {
  console.log(person.introduceYourself());
});

//    a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
//   Dla powyższego przykładu tekst powinien wyglądać w następujący sposób
//    "Cześć jestem Alicja Kowalska, ale w szkole mówią na mnie [Ajcwok]."
//  b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
//  pojawić się tekst powitalny dla każdej osoby w tablicy
//                                 ZAD 4.
//  Dane wejściowe
// const people5 = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok",
//     age: 19,
//     introduceYourself: ,
//   },
// ];

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

function getColor(number = 5) {
  if (number < 1) {
    console.log(`Podałeś za małą liczbę, liczba nie może być mniejsza niż 1`);
  } else if (number > 30) {
    console.log(`podałeś za dużą liczbę, liczba nie może być większa niż 30`);
  }

  let sum = 0;

  for (const person of people4) {
    let count = 0;
    for (const [key, value] of Object.entries(person)) {
      if (count === 3) {
        break;
      }
      count++;
      sum += key.length + value.length;
    }
  }
  const result = Math.abs(sum - number) % colors.length;
  return colors[result];
}
getColor();

console.log(getColor());
//      Napisz funkcję, która :
//   a) przyjmie parametr typu number z zakresu 1 - 30
//   b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
//  c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
//            - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
//     - podałeś za dużą liczbę, liczba nie może być większa niż 30
//  d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
//    e) funkcja powinna zsumować pary klucz + wartość trzech pierwszych pozycji w obiekcie (użyj do tego Object.entries)
//   odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
//   wyznaczyć index\\     f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
//        Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
//       (45 - 5) % 6 =    console.log(colors[4])  pink
//        Hints  - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math,
//          Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią
