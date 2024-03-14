let i = 1;
let n = '';
let count = 2;
while(i <= 20){
    n += count + ' ';
    count = count + count
    i++;
}
console.log(n)