// Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.

const name = 'Марина';
console.log(name);

// Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".

const age = 40;
console.log(`Мені ${age} років`);

// Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.

const x = 10;
const y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.

const city = 'Odessa';
const myCity = `Я живу в місті ${city}`;
console.log(myCity);

// Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль.

const email = 'marinagolikova1984@gmail.com';
const [username, domain] = email.split('@');
console.log(username);
console.log(domain);

// Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".

const price = 500;
const productPrice = `Ціна: ${price} грн`;
console.log(productPrice);

// Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.
const firstName = 'Marina';
const lastName = 'Holikova';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.
const a = 8;
const b = 4;
const sum = a + b;
console.log(sum);
const difference = a - b;
console.log(difference);
const product = a * b;
console.log(product);
const quotient = a / b;
console.log(quotient);

// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.
const radius = 5;
const pi = 3.14;
const area = pi * radius ** 2;
console.log(area);

// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.
const someString = 'qwerty';
const someStringLangth = someString.length;
console.log(someStringLangth);

// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.
// (щоб зробити це завдання в цьому файлі, я створила інший рядок та змінну рядка з іншою назвою:)
const someElseString = 'zxcvbn';
const firstLetter = someElseString[0];
const lastLetter = someElseString[someElseString.length - 1];
console.log(firstLetter);
console.log(lastLetter);

// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"
