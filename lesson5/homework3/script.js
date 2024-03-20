function maxNum(...arg){
    let n = +prompt("Скільки чисел ви хочете ввести?")
    if (n < 2){
        return 'Введіть більше чисел'
    }
    let count = +prompt('1 число')
    for(let i=2; i <= n; i++){
        let n1 = +prompt(`${i} число`)
        if (count < n1){
            count = n1
        }
    }
    return count
}
let ret = maxNum()
console.log(`Найбільше число`, ret)