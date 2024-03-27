let n = +prompt('Введіть кількість елементів')
let q = +prompt('Введіть знаменник')
let Sn;
let progressGeo = function(n, q){
    Sn = 1*(1 - Math.pow(q, n)) / (1 - q)
    return Sn;
}
ret = progressGeo(n, q);
console.log(ret)