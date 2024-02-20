//Типи даних. Змінні. Операції

//1.Визначте 4 змінні і задайте їм значення 11, true, "java script", "100".
//Виведіть значення цих змінних в консоль.
const numberVariable = 11;
console.log("numberVariable:>>", numberVariable);

const boolValue = true;
console.log("boolValue:>>", boolValue);

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
console.log("num", num);

let num2 = 1;
num2 += 11;
console.log("num2", num2);

let num3 = 1;
num3 -= 11;
console.log("num3", num3);

let num4 = 1;
num4 *= 11;
console.log("num4", num4);

let num5 = 1;
num5 /= 11;
console.log("num5", num5);

let num6 = 1;
num6++;
console.log("num6", num6);

let num7 = 1;
num7--;
console.log("num7", num7);

//JS. Введення/виведення даних
//1. . Запитайте число у користувача (prompt), піднесіть його до квадрату і виведіть результат (alert).

const inputValue = Number(prompt("Введіть число:"));
console.log("inputV =", inputValue ** 2);
alert("Число піднесене до квадрату");

// 2.Виведіть середнє арифметичне двох чисел. Числа запитувати у користувача.
const inputValue1 = Number(prompt("Введіть перше число:"));
const inputValue2 = Number(prompt("Введіть друге число:"));
const averageValue = (inputValue1 + inputValue2) / 2;
console.log("averageValue", averageValue);
alert("Середнє значення " + averageValue);

//3. Переведіть кількість хвилин на секунди та виведіть результат. Число хвилин запитувати у користувача.

const minutes = Number(prompt("Введіть хвилини:"));
const seconds = minutes * 60;
console.log("seconds", seconds);
alert("Секунди " + seconds);

//4. Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача
// та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasia!'. (згадайте про конкатенацію)

let greeting = "Hello ";
let userName;
userName = prompt("ім'я користувача:");
const notification = greeting + " " + userName;
alert(notification);

//_JS. Умови________________________________________________

//Запитати змінну у користувача (prompt). Якщо введена змінна дорівнює числу 10, виведіть рядок 'Вірно', інакше виведіть рядок 'Невірно' (if).

const inputVariable = Number(prompt("Введіть змінну"));
if (inputVariable === 10) {
  console.log("Вірно");
} else console.log("Невірно");

// 2. Напишіть дві перевірки за допомогою if.
// Задати значення змінної в скрипті при оголошенні (const test = true; // або false)
// Якщо змінна test дорівнює true, виведіть рядок '1 Вірно', інакше виведіть рядок '1 Невірно'.
// Якщо змінна test не дорівнює true, то виведіть рядок '2 Вірно', інакше виведіть рядок '2 Невірно'
// Перевірте роботу скрипта при test, що дорівнює true, потім при test, що дорівнює false.

const test1 = true;
if (test1) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

const test2 = true;
if (!test2) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

//3. Обчисліть суму покупки з урахуванням знижки.
// Користувач вводе суму знижки (prompt).
// Якщо сума покупки більша за 500 грн. (але менше/дорівнює 800), то надається знижка 3%,
// якщо сума покупки більша за 800 грн. -- знижка 5%.
// В інших випадках знижка не надається.
// Вивести суму, яку має заплатити користувач.

console summ =Number(prompt("Введіть суму покупки"));
if (summ >= 500 && total < 800) {
  console.log ( "Ваша знижка" + summ * 0.03 + "грн");
} else if (summ >= 800) {
  console.log ( "Ваша знижка" + summ * 0.05 + "грн");
} 
else {console.log ("На жаль, знижка не надається");
}
