// // Напишемо функцію для визначення площі кола
// function getArea(r) {
//   const area = Math.PI * r ** 2;
//   return area;
// }
// console.log(getArea(5));
// console.log(getArea(10));

// // напишемо функцію суми двох чисел

// function sumCalc(x, y) {
//   const result = x + y;
//   return result;
// }
// const res1 = sumCalc(2, 4);
// console.log(res1);
// const res2 = sumCalc(8, 9);
// console.log(res2);
// const res3 = sumCalc(res1, res2);
// console.log(res3);

// // функія привітання з використанням prompt (взаємодія з користувачем)
// function getHelloMassage() {
//   const name = prompt('Enter your name');
//   return `Hello ${name}`;
// }
// const helloName = getHelloMassage();
// console.log(helloName);

// // функія отримання повного ім'я (використовуємо prompt )
// function getFullName() {
//   const firstName = prompt('Enter your firstName');
//   const lastName = prompt('Enter your lastName');
//   const result = `${firstName} ${lastName}`;
//   return result;
// }
// const fullName = getFullName();
// console.log(fullName);

// /**
//  * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
//  * маси тіла людини. Для цього необхідно розділити вагу на
//  * квадрат висоти.
//  *
//  * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
//  * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
//  * частини може бути кома.
//  *
//  * Індекс маси тіла необхідно округлити до однієї цифри після коми.
//  */

// function calcBMI(weight, height) {
//   weight = weight.replace(',', '.');
//   height = height.replace(',', '.');
//   const w = parseFloat(weight);
//   const h = parseFloat(height);
//   const res = w / h ** 2;
//   return res;
// }
// const weight = prompt('- weight');
// const height = prompt('- height');
// calcBMI(weight, height);

// // Задача-1
// // Напишіть функцію яка приймає два параметри str1 та str2.
// // Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.
// // В іншому випадку функція повинна повернути булеве значення false.

// function foo(str1, str2) {
//   const firstLatter = str1[0];
//   const lastLatter = str2[str2.length - 1];
//   return firstLatter === lastLatter;
// }

// const res1 = foo('Hello', 'Aloha');
// const res2 = foo('Hello', 'AloH');
// console.log(res1);
// console.log(res2);

// // Задача-2
// // Напишіть функцію яка приймає два параметри str1 та str2.
// // Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2.
// // В іншому випадку функція повинна повернути булеве значення false.
// function foo(str1, str2) {
//   const firstLatterStr1 = str1[0];
//   const firstLatterStr2 = str2[0];
//   return firstLatterStr1 === firstLatterStr2;
// }
// const res1 = foo('Hello', 'Aloha');
// const res2 = foo('Hello', 'Hloha');
// console.log(res1);
// console.log(res2);

// // Задача-3
// // Напишіть функцію яка приймає два параметри str1 та str2.
// // Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2.
// // В іншому випадку функція повинна повернути булеве значення false.

// function foo(str1, str2) {
//   const lengthStr1 = str1.length;
//   const lengthStr2 = str2.length;
//   return lengthStr1 === lengthStr2;
// }
// const res1 = foo('Hello', 'Aloha');
// const res2 = foo('Hello', 'Aloh');
// console.log(res1);
// console.log(res2);

// // або це можна зробити просто коротшим записом так:
// function foo(str1, str2) {
//   return str1.length === str2.length;

// }
// // Задача-4
// // Напишіть функцію яка приймає число num.
// // Функція повинна повернути булеве значення true якщо кількість цифр у числі парна.
// // В іншому випадку функція повинна повернути булеве значення false.
// function foo(num) {
//   const numLengh = Math.abs(num).toString().length;
//   return numLengh % 2 === 0;
// }
// const res1 = foo(12);
// const res2 = foo(121);
// console.log(res1);
// console.log(res2);

// // Задача-5
// // Напишіть функцію, яка приймає два параметри num1 та num2.
// // Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2.
// // В іншому випадку функція повинна повернути булеве значення false.
// function foo(num1, num2) {
//   return num1 > num2;
// }
// const res1 = foo(12, 6);
// const res2 = foo(12, 15);
// console.log(res1);
// console.log(res2);

// // Задача-6
// // Напишіть функцію, яка приймає два параметри num1 та num2.
// //  Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі.
// //  В іншому випадку функція повинна повернути булеве значення false.
// function foo(num1, num2) {
//   return num1 % num2 === 0;
// }

// const res1 = foo(12, 6);
// const res2 = foo(12, 7);
// console.log(res1);
// console.log(res2);

// // Задача-7
// // Напишіть функцію, яка приймає число num.
// // Функція повинна повернути булеве значення true, якщо num є непарним числом.
// // В іншому випадку функція повинна повернути булеве значення false.

// function evenNumber(num) {
//   return num % 2 === 0;
// }
// const res1 = evenNumber(12);
// const res2 = evenNumber(7);
// console.log(res1);
// console.log(res2);

// // ІНСТРУКЦІЯ if

// const age = 25;
// if (age > 10) {
//   console.log('Користувачу більше 10 років');
// }
// якщо умова не виконується, то нічого не відбудеться і буде виконуватися наступний код.

// // ІНСТРУКЦІЯ if...else

// const age = 17;
// if (age >= 18) {
//   console.log('Заходь');
// } else {
//   console.log('Виходь');
// }

// const isRaining = false;
// if (isRaining) {
//   console.log('Візьми парасольку');
// } else {
//   console.log('Доща немає, не бери парасольку');
// }

// // Блок else...if

// const temp = 7;
// if (temp > 20) {
//   console.log('Жарко');
// } else if (temp > 10) {
//   console.log('Нормально');
// } else if (temp > 0) {
//   console.log('Прохолодно');
// } else {
//   console.log('Xолодно');
// }

// // Тернарний оператор
// // візьмем таку умову:
// let message = '';
// const userBallance = 1000;
// if (userBallance > 500) {
//     message = 'Hello';
// } else {
//     message = 'Bye'
// }
// console.log(message);

// // За допомогою тернарного оператора ця ж умова пишеться так:
// const userBallance = 1000;
// let message = userBallance > 500 ? 'Hello' : 'Bye';
// console.log(message);
// Використовуємо тоді, коли до якоїсь змінної треба поставити одне з двох значень, або перше, або друге .

// // приклад функції:
// function task1(isRaining) {
//   let messageForSister = isRaining
//     ? 'Візьми парасольку'
//     : ' Не бери парасольку';
//   console.log(messageForSister);
// }
// task1(true);
// task1(false);

// // Задача-8
// // Напишіть функцію, яка приймає параметр str.
// // Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру.
// // В іншому випадку функція повинна повернути булеве значення false.

// // Підказка: допоможе toLowerCase();
// function containsUppercase(str) {
//     // Перебираємо всі символи рядка
//     for (let i = 0; i < str.length; i++) {
//         // Перевіряємо, чи символ є великою літерою
//         if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
//             return true;
//         }
//     }
//     return false;
// }

// // Приклади використання
// console.log(containsUppercase("hello")); // false
// console.log(containsUppercase("Hello")); // true
// console.log(containsUppercase("123ABC")); // true
// console.log(containsUppercase("123"));   // false
