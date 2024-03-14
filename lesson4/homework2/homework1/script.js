let num = +prompt("Введіть число")
let num1 = 1;
let i = 1;

while(i <= num){
    num1 *= i
    i++;
}
console.log(`Факторіал числа ${num} дорівнює =>`, num1)