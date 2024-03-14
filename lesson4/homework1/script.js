document.write(`<h2>Пароль: HAPPY?123 </h2>`)
let pass = "HAPPY?123";
let a = prompt("Введіть пароль!");
let b = a;
let i = 1;
while(b !== pass){
    console.log(`Залишилось ${5-i} спроби!`)
    i++
    a = prompt("Введіть пароль!");
    b = a
    if (i == 5){
        b = pass
        console.log(`Будь ласка спробуйте пізніше!`)
    }
}
if (a == pass){
    console.log(`Запрошуємо на сайт!`)
}