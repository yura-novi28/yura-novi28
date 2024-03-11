let n = +prompt("Введіть число для факториала:")
let sumFactorial = 1;

for(i=1; i <= n; i++){
    sumFactorial *= i
}

console.log(sumFactorial)