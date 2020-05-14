console.log("HeLLo PeopLe!");

const firstName = "Serg";
const age = 55;

const ggg = {};
ggg.nu = 111;

console.log("_имя_", firstName, "  __возраст_ = ", age);
console.log("_имя_", firstName, "  __возраст_ = ", age.toString());
console.log("_имя_" + firstName + "  __возраст_ = " + age);
console.log("__ggg__= ", ggg);

// _________ ввод данных ______________
const lastName = prompt("Введите фамилию");
console.log(firstName + " " + lastName);

const num1 = 42;    // number
const num2 = "42";  // string
console.log(num1 == num2);
console.log(num1 === num2);

const isReady = false;
if (isReady === true) {
    console.log("Все готово!");
}
// ___ короткий вариант написания ___
if (isReady) {
    console.log("Все готово!");
} else {
    console.log("Все НЕ готово!");
}

// __ еще более короткий вариант - тернарный оператор ___
isReady ? console.log("Все___готово!") : console.log("Все___НЕ___готово!");

// __ БУЛЕВАЯ ЛОГИКА __



