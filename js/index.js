//Типи даних. Змінні. Операції

//1.Визначте 4 змінні і задайте їм значення 11, true, "java script", "100".
//Виведіть значення цих змінних в консоль.
const numberVariable = 11;
console.log("numberVariable:>>", numberVariable);

const boolValue = true;
console.log("boolValue :>>", boolValue);

const stringVariable = "java script";
console.log("stringVariable:>>", stringVariable);

const numberValue = "100";
console.log("numberValue:>>", numberValue);

//2. Створіть 2 змінні і задайте їм значення. Виконайте дію над цими значеннями і результат виведіть в консоль:
//Створіть дві змінні a та b. Виведіть у консоль результат їх множення.
//Створіть дві змінні c та d. Виведіть у консоль результат ділення першого на друге.
//Створіть дві змінні e та f. Виведіть у консоль результат додавання.

// Множення
const a = 2;
const b = 3;

const x = a * b;
console.log("x :>> ", x);

// Ділення
const c = 60;
const d = 10;

const y = c / d;
console.log("y :>>", y);

// Додавання
const e = 5;
const f = 1;

const z = e + f;
console.log("z :>>", z);

//3.Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num – 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num – 1;

let num = 1;
console.log("num :>>", num);

let num2 = 1;
num2 += 11;
console.log("num2 :>>", num2);

let num3 = 1;
num3 -= 11;
console.log("num3 :>>", num3);

let num4 = 1;
num4 *= 11;
console.log("num4 :>>", num4);

let num5 = 1;
num5 /= 11;
console.log("num5 :>>", num5);

let num6 = 1;
num6++;
console.log("num6 :>>", num6);

let num7 = 1;
num7--;
console.log("num7 :>>", num7);

//JS. Введення/виведення даних
//1. . Запитайте число у користувача (prompt), піднесіть його до квадрату і виведіть результат (alert).

// const inputValue = Number(prompt("Введіть число:"));
// console.log("inputValue ** 2 =", inputValue ** 2);
// alert("Число піднесене до квадрату");

// // 2.Виведіть середнє арифметичне двох чисел. Числа запитувати у користувача.
// const inputValue1 = Number(prompt("Введіть перше число:"));
// const inputValue2 = Number(prompt("Введіть друге число:"));
// const averageValue = (inputValue1 + inputValue2) / 2;
// console.log("averageValue", averageValue);
// alert("Середнє значення");

//3. Переведіть кількість хвилин на секунди та виведіть результат. Число хвилин запитувати у користувача.

// const Minutes = Number(prompt("Введіть хвилини:"));
// const seconds = Minutes * 60;
// console.log("seconds", seconds);
// alert("Хвилини");

//4. Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача
// та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasia!'. (згадайте про конкатенацію)

let greeting = "Hello";
let userName;
const notification = greeting + userName;
userName = prompt("ім^я користувача:");
alert(notification);
