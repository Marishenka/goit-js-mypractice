// // Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.

// const name = 'Марина';
// console.log(name);

// // Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".

// const age = 40;
// console.log(`Мені ${age} років`);

// // Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.

// const x = 10;
// const y = 5;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// // Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.

// const city = 'Odessa';
// const myCity = `Я живу в місті ${city}`;
// console.log(myCity);

// // Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль.

// const email = 'marinagolikova1984@gmail.com';
// const [username, domain] = email.split('@');
// console.log(username);
// console.log(domain);

// // Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".

// const price = 500;
// const productPrice = `Ціна: ${price} грн`;
// console.log(productPrice);

// // Створи дві змінні firstName і lastName.
// // Присвой їм своє ім'я та прізвище.
// // Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// // Виведи fullName в консоль.
// const firstName = 'Marina';
// const lastName = 'Holikova';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // Створи дві змінні a і b, присвой їм якісь цілі числа.
// // Виконай над ними додавання, віднімання, множення і ділення.
// // Запиши результати в змінні sum, difference, product, quotient.
// // Виведи всі ці результати в консоль.
// const a = 8;
// const b = 4;
// const sum = a + b;
// console.log(sum);
// const difference = a - b;
// console.log(difference);
// const product = a * b;
// console.log(product);
// const quotient = a / b;
// console.log(quotient);

// // Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// // Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// // Використовуй значення π = 3.14. Запиши результат у змінну area.
// // Виведи area в консоль.
// const radius = 5;
// const pi = 3.14;
// const area = pi * radius ** 2;
// console.log(area);

// // Створи змінну someString і присвой їй будь-який рядок.
// // Обчисли довжину цього рядка, використовуючи властивість .length.
// // Виведи довжину рядка в консоль.
// const someString = 'qwerty';
// const someStringLangth = someString.length;
// console.log(someStringLangth);

// // Створи змінну someString і присвой їй будь-який рядок.
// // Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// // Створи змінну lastLetter і присвой їй останню літеру рядка someString.
// // (щоб зробити це завдання в цьому файлі, я створила інший рядок та змінну рядка з іншою назвою:)
// const someElseString = 'zxcvbn';
// const firstLetter = someElseString[0];
// const lastLetter = someElseString[someElseString.length - 1];
// console.log(firstLetter);
// console.log(lastLetter);

// // Створи дві змінних str1 та str2.
// // Отримай з кожної змінної останню літеру
// // Створи третю змінну де обєднай попередні літери
// // Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"
// const str1 = 'HELLO';
// const str2 = 'WORLD';
// const lastLetterStr1 = str1[str1.length - 1];
// const lastLetterStr2 = str2[str2.length - 1];
// const result = lastLetterStr1 + lastLetterStr2;
// console.log(result);

// // Створи змінну userValue та запиши до неї будь-яке число.

// // Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// // userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// // Приклади:
// // для числа 1 = 1 * 5^1 = 5;
// // для числа 2 = 2 * 5^1 = 10;
// // для числа 12 = 12 * 5^2 = 300;
// // для числа 512 = 512 * 5^3 = 64000;
// const userValue = 84;
// const userValueLangth = userValue.toString().length;
// // перетворює число на рядок і визначає кількість символів у ньому(кількість цифр).
// const userValueResult = userValue * Math.pow(5, userValueLangth);
// // Math.pow(5, digitCount) - обчислює 5 у ступені, рівному кількості цифр.
// console.log(userValueResult);

// // Виведіть на екран загальну кількість яблок і винограду.
// //  Різницю яблока і винограду теж виведіть у консоль.

// // const apples = 47;
// // const grapes = 135;
// // const total = ;
// // console.log(total)
// // const diff = ;
// // console.log(diff)
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// // Замінити вираз перевизначення комбінованим оператором `+=`.
// // let students = 100;
// // students = students + 50;
// // console.log(students);
// let students = 100;
// students += 50;
// console.log(students);

// // Розбери пріоритет операторів в інструкції визначення значення змінної
// // `result`.

// //  const result= 108 + 223 - 2 * 5;
// //  console.log(result);

// // Склади фразу за допомогою шаблонних рядків
// // `A has B bots in stock`, де A, B -
// // змінні вставлені у рядок.

// // const companyName = "Cyberdyne Systems";
// // const repairBots = 150;
// // const defenceBots = 50;
// // const message = ``;
// // console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message);

// // Домашнє завдання №1
// // Станція з продажу ремонтних дроїдів готова до запуску,
// //     залишилося написати програмне забезпечення для відділу продажів.

// // Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику:
// // • quantity— перший параметр, число, що містить кількість замовлених дроїдів
// //  • pricePerDroid — другий параметр, число, що містить вартість одного дроїда

// // Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
// // "You ordered <quantity> droids worth <totalPrice> credits!",
// //     де: • <quantity> — це кількість замовлених дроїдів
// //         • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// //             Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// //             У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// // Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику:
// // • country — перший параметр, рядок, що містить країну доставки
// // • price — другий параметр, число, що містить загальну вартість товару
// // • deliveryFee — третій параметр, число, що містить вартість доставки товару

// // Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача:
// // "Shipping to <country> will cost <totalPrice> credits",
// //     де: • <country> — це країни доставки
// //         • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// //             Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// //             У консоль будуть виведені результати її роботи.

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

// // Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику:
// //  • content— перший параметр, ширина контенту
// //  • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
// //  • border — третій параметр, значення товщини бордера для кожної зі сторін.
// //  Значення всіх параметрів будуть рядками формату Npx
// //  де N — це довільне число, ціле або дробове.

// // Доповни код функції так, щоб вона повертала число —загальну ширину елемента.
// // При розрахунку загальної ширини орієнтуйся на те, що значення box - sizing дорівнює border - box.

// // Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// // У консоль будуть виведені результати її роботи.
// function getElementWidth(content, padding, border) {
//   const contentWidth = parseFloat(content);
//   const paddingWidth = parseFloat(padding) * 2;
//   const borderWidth = parseFloat(border) * 2;
//   return contentWidth + paddingWidth + borderWidth;
// }

// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200
