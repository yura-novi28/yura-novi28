let fibonachi = (x) => {
    let n1 = 1;
    let n2 = 1;
    let n3 = n2;
    let counter = 1
    for(let i = 1; i < x; i++){
        counter += ' ' + n1;
        n1 = n1 + n3;
        n3 = n2;
        n2 = n1;
    }
    console.log(counter)
}

fibonachi(+prompt('Введіть число'))