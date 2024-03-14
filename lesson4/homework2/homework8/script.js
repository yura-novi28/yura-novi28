let a = +prompt(`Введіть число`)
let b = +prompt(`Введіть степінь`)
let result = a;
let i = 1;
let j = b;
if (b === 0){
    result = 1
    i = b + 1
}
if (b < i){
    j = -b    
}
while(i < j){
    result *= a
    i++;
    if(b < 0 && i == j){
        result = 1 / result
    }
}
console.log(result)