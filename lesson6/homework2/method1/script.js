let progressGeo;
let a = +prompt('Введіть кількість чисел')
let b = +prompt('Введіть знаменник')
let count = 1;
let n = 1;
if(a == 0 && b == 0){
    console.log('Ошибка')
}
else{
    if(a < 0){
        a = -a
    }
    if(b < 0){
        b = -b
    }
    progressGeo = function(a, b){
        for(let i=1; i<a; i++){
            n *= b
            count += n
        }
        return count;
    }
    console.log(progressGeo(a, b))
}
