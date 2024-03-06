let count = 0;

if (prompt("У якому році був оснований Arsenal?") == 1886){
    count++
}
if (prompt("Хто отримав прізвисько Містер Арсенал?").toLowerCase() == "тоні адамс"){
    count++
}
if (prompt("У якому році Арсена Венгера було призначено тренером команди?") == 1996){
    count++
}
if (prompt("У кого найбільше матчів у лізі? Напишіть тільки ім'я").toLowerCase() == "девід"){
    count++
}
if (prompt("Як називався попередній стадіон «Арсеналу»?").toLowerCase() == "гайбері"){
    count++
}
if (prompt("Скільки разів Арсенал вилітав із АПЛ?") === "0"){
    count++
}
if (prompt("Останній трансфер Арсена Венгера?").toLowerCase() == "обамеянг"){
    count++
}
if (prompt("Який клуб купив Денніс Бергкамп?").toLowerCase() == "інтер"){
    count++
}
if (prompt("Хто був призначений капітаном у 2008 році?").toLowerCase() == "фабрегас"){
    count++
}
if (prompt("Кому належав нік The BFG?").toLowerCase() == "мертезакер"){
    count++
}


console.log("Кількість правильних відповідей з можливих 10 -", count)
if (count >= 0 && count < 3){
    console.log("Ви дуже погано знаєте Арсенал")
}
else if (count >= 3 && count < 5){
    console.log("Ви погано знаєте Арсенал")
}
else if (count >= 5 && count < 7){
    console.log("Ви добре знаєте Арсенал")
}
else if (count >= 7 && count < 10){
    console.log("Ви дуже добре знаєте Арсенал")
}
else if (count == 10){
    console.log("Ви ідеально знаєте Арсенал")
}