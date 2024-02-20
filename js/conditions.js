// if(умова) {
//   гілка true;
// } else{
//   гілка false;
// }

const isLogged = true;
if (isLogged) {
  console.log("You are Logged in");
} else {
  console.log("Try again ");
}

//2. Напишіть дві перевірки за допомогою if.
// Задати значення змінної в скрипті при оголошенні (const test = true; // або false)
// Якщо змінна test дорівнює true, виведіть рядок '1 Вірно', інакше виведіть рядок '1 Невірно'.
// Якщо змінна test не дорівнює true, то виведіть рядок '2 Вірно', інакше виведіть рядок '2 Невірно'

const test = true;
if (test) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

const test2 = false;
if (test2) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

// Обчисліть суму покупки з урахуванням знижки.
// Користувач вводе суму знижки (prompt).
// Якщо сума покупки більша за 500 грн. (але менше/дорівнює 800), то надається знижка 3%,
// якщо сума покупки більша за 800 грн. -- знижка 5%.
// В інших випадках знижка не надається.
// Вивести суму, яку має заплатити користувач.

const inputValue = Number(prompt("Введіть суму знижки"));
const age = 18;
if (age < 18);

console.log("Деякі фу-ї будуть обмежені");
console.log("Вітаємо на сайті");

const age = 18;
const isVactinated = true;

if (age < 18) {
  console.log("Wellcome)");
} else {
  if (isVactinated) {
    console.log("Wellcome)");
  } else {
    console.log("Please go to vactination");
  }
}
