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

// функія отримання повного ім'я (використовуємо prompt )
function getFullName() {
  const firstName = prompt('Enter your firstName');
  const lastName = prompt('Enter your lastName');
  const result = `${firstName} ${lastName}`;
  return result;
}
const fullName = getFullName();
console.log(fullName);
