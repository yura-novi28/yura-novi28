let zero = prompt("Введіть щось");

if (zero > 0 || zero == "+"){
    console.log("Ви ввели додатнє число")
}
else if (zero < 0 || zero == "-"){
    console.log("Ви ввели від'ємне число")
}
else if (zero == ""){
    console.log("Ви нічого не ввели")
}
else if(zero == null){
    console.log("Ви скасували умову")
}
else if (zero == 0 || zero == "zero"){
    console.log("Ви ввели число нуль")
}
else{
    console.log("Ви ввели текст")
}
