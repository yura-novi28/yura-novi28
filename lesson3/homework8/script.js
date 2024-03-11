let a = +prompt("Введіть число");
let b = +prompt("Введіть степінь");
let sum = 1;
let bm = 1;
if (b === 0){
    console.log(1)
}
else{
    if (b<0){
        bm = b;
        b = -b
    }
    for(i = 1; i <= b; i++){
        sum = sum * a
    }
    if(bm < 0){
        sum = 1 / sum
    }
    console.log(sum)
}
