let a = +prompt('Введіть перше число')
let b = +prompt('Введіть друге число')
let simpleNum = (a, b) => {
    let count = 0;
    let num = '';
    if(a > b){
        let c = a;
        a = b;
        b = c;
    }
    for(let i = a; i < b; i++){
        count = 0
        for(let j = 1; j <= i; j++){
            if(i%2 != 0){
                count++
            }
        }
        if(count >= 2){
            num += i + ' ';
        }
    }
    return num;
}
console.log(simpleNum(a,b))   