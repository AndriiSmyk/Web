//Завдання 2
console.log("Cмик");

//Завдання 3
let a = 5;
let b = 6;

console.log("a = " + a + "; b = " + b);

b=a;

console.log("a = " + a + "; b = " + b);

//Завдання 4
let object={
    string: "string",
    number: 5,
    boolean: true,
    undefined: undefined,
    null: null
};

//Завдання 5
let isAdult=confirm("Вам є 18 років?");
console.log(isAdult);

//Завдання 6
let surname="Смик";
let name="Андрій";
let birthYear=2003;
let group="КН-321";
let isMarried=false;

console.log(birthYear);
console.log(isMarried);
console.log(surname);
console.log(name);
console.log(group);

let undefined1;
let null1 = null;

console.log(typeof undefined);
console.log(typeof null1);

//Завдання 7
let login=prompt("Введіть логін");
let email=prompt("Введіть email");
let password=prompt("Введіть пароль");

alert("Dear " + login + " your email is " + email + ", your password is " + password);

//Завдання 8
let secondInHour=60*60;
let secondInDay=24*secondInHour;
let secondInMonth=31*secondInDay;

alert("Секунд в годині: " + secondInHour + "; Секунд в дні: " + secondInDay + "; Секунд в місяці: " + secondInMonth);