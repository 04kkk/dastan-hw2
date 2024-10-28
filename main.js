
// let name = "Dastan"; //str
// console.log(name)


// let a = 10;  //num
// console.log(a);


// let isTrue = true //boolean

// let isFalse = false

// let b = null

// let c = undefined



// console.log(a + b);

// console.log(b - a);

// console.log(a * b);

// console.log(b / a);

// console.log(b % a);



// let age = +prompt("Введите свой возраст!")

// if (age >= 18){
//     console.log ("Ты можешь покупать")
// }
// else if (age < 18){
//     console.log("ТЫ еще мел")
// }
// else{
//     console.log("По очереди")
// }








//  Задача.с.четными.числами

// let num = +prompt("Введи число:");


//   if (num % 2 === 0) {
//     alert("четное");
//   } else {
//     alert("нечетное");
//   }




// zadacha s kvadratom

// let num = +prompt("Введи число:");

// let kvadrat = num ** 2;
// alert("число в квадрате " + kvadrat)





// zadacha bol'she

// let num = +prompt ("первое число:");    

// let num2 = +prompt ("Второе число:")

// if (num < num2){
//     alert(" Это число больше: " + num2 );
// }
// else if (num > num2){
//     alert(" Это число больше: " + num )
// }





// zadacha s vozrastom

// let age = +prompt("Возраст:");

// if (age >= 18){
//     alert("Ты можешь голосовать");
// }
// else {
//     alert("Не получится")
// }



// zadacha men'she

// let num = +prompt ("первое число:");    

// let num2 = +prompt ("Второе число:")

// if (num > num2){
//     alert(" Это число меньше: " + num2 )
// }
// else if (num < num2){
//     alert(" Это число меньше: " + num );
// }



// zadacha s vremenem sutok

// let hour = +prompt("Введи число: ")

// if (hour <= 11){
//     alert("Доброе утро!")
// }
// else if(hour <= 18){
//     alert("Добрый день!")
// }
// else if(hour <= 21){
//     alert("Добрый вечер!")
// }
// else if (hour <= 23){
//     alert("Доброй ночи!")
// }
// else if (hour >= 24){
//     alert("Введите правильное время!")
// }


// zadacha s user,om

// let at = prompt("Имя")
// if (at){
//     alert("Привет " + at)
// }
// else{
//     alert("Привет, user")
// }


// задача со скидкой

// let cost = +prompt("Введите сумму товара: ")
// let sale = +prompt("Введите процент скидки: ")

// let saleAll = (cost * sale) / 100;
// let price = cost - saleAll;

// alert("Общая стоимость товара со скидкой: " + price + "cом")




// задача с температурой

// let temp = +prompt("Температура воды: ")

// if (temp < 0) {
//     alert("Вода заморожена");
//   } else if (temp >= 0, temp <= 100) {
//     alert("Вода жидкая");
//   } else {
//     alert("Вода в состоянии пара");
//   }



// задача с возрастом

// let age1 = +prompt("Введите первый возраст: ")
// let age2 = +prompt("Введите второй возраст: ")

// if (age1 < age2){
//     alert(" Это число больше: " + age2 );
// }
// else if (age1 > age2){
//     alert(" Это число больше: " + age1 )
// }
// else {
//     alert("Они оба одного возраста")
// }




// задача со словами

// let str1 = prompt("Первое слово")
// let str2 = prompt("Второе слово")

// if (str1 < str2){
//     alert(" Это слово длиннее: " + str2 );
// }
// else if (str1 > str2){
//     alert(" Это слово длиннее: " + str1 )
// }
// else {
//     alert("Одинаковая длина")
// }







// let grad = +prompt("Введите число: ");

// if (grad <= 100-90){
//     alert("Отлично");
// }
// else if (grad >= 89){
//     alert("Хорошо");
// }
// else if (grad <= 75){
//     alert("Удовлетворительно");
// }
// else if (grad < 50){
//     alert("Неудовлетворительно");
// }



const a = document.querySelector(".number-1")
const b = document.querySelector(".number-2")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const del = document.querySelector(".del")
const umno = document.querySelector(".umno")
const resault = document.querySelector(".resault")
const res = document.querySelector(".res")
const par = document.querySelector(".par")
const show = document.querySelector(".btn1")
const hide = document.querySelector(".btn2")
const buttons = document.querySelector(".buttons")

const back = document.querySelector("body")


const input = document.querySelector("#inputField")
const button = document.querySelector("#buttonField")


const score__text = document.querySelector(".score-text")
const score__btn = document.querySelector(".score-btn")


const list = document.querySelector(".list")
const item_btn = document.querySelector(".item-btn")



const element__text = document.querySelector(".element__text")
const element__btn = document.querySelector(".element__btn")


const inputBox = document.querySelector(".input__box")
const btnBox = document.querySelector(".btn__box")
const parBox = document.querySelector(".par__box")




buttons.addEventListener("click", function () {
    if (plus.addEventListener  ){
        
        res.innerText = (Number(a.value) + Number(b.value));
    }
    else if (minus.addEventListener){
        res.innerText = (Number(a.value) - Number(b.value));

    }
    else if ( umno.addEventListener ){
        res.innerText = (Number(a.value) * Number(b.value));

    }
    else if ( del.addEventListener ){
        res.innerText = (Number(a.value) / Number(b.value));

    }
});



hide.addEventListener("click", function () {
    back.style.background = "white";
    par.style.display = "none"
})

show.addEventListener("click", function () {
    back.style.backgroundColor = 'rgb(213, 237, 77)'
    par.style.display = "block"
})




button.addEventListener("click", function () {
    input.innerHTML = input.value = "Hello, world!"
})

let score__s = 0;


score__btn.addEventListener("click", function () {


    score__s++;
    score__text.textContent = (score__s)

})

let items = 0;

item_btn.addEventListener("click", function(){
    const item = document.createElement("li")
    list.appendChild(item);
    items++;
    item.textContent = `Новый элемент ${items}`;

})
 





element__btn.addEventListener("click", function(){
    element__text.innerHTML = ("Жирный и большой шрифт")
    element__text.style.fontSize = "24px"
    element__text.style.fontWeight = "bold"

})



btnBox.addEventListener('click', function () {
    if (inputBox.value.trim() == "") {
        parBox.innerText = "поле пустое!";
        parBox.style.fontStyle = "oblique"
    }
});
