function normalNum(a){
    if (a != 0 || a != 1 || a != -1){
        if (-1 > a){
            a = -a
        }
        let count = 0;
        for(let i=2; i <= a; i++){
            if (a%i == 0){
                count++
            }
        }
        if (count >= 2){
            return 'Число просте';
        }
        else if (count != 2){
            return 'Число непросте';
        }
    }
    return 'Число не підходе';
}

let rut = normalNum(+prompt('Введіть число'));
console.log(rut)