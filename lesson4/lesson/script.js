// let n = 0;
// let i = 1;
// while(i <= 5){
//     i++;
//     let number = +prompt("Введіть число");
//     if(number < 0){
//         n++
//     }
// }
// console.log(n);




// let i = +prompt(`Введіть число`);
// let count = 0;
// let num = '';
// while(i >= 0){
//     num += i + ` `
//     count++;
//     i = +prompt(`Введіть число`); 
// }
// console.log(`Всього спроб`, count)
// if (num !== ''){
//     console.log(`Числа які вводили`, num)
// }


// let num = +prompt(`Введіть число більше 0`);
// let quest = +prompt(`Введіть 1 якщо горизонталь або 0 якщо вертикально`);
// let z = ``;
// while(num > 0){
//     if (quest === 1){
//         z += `*` + ` `
//     }
//     else if (quest === 0){
//         document.write(`<h2>*</h2>`)
//     }
//     num--;
// }
// if(quest === 1){
//     document.write(`<h2>${z}</h2>`)
// }




let num = +prompt("Введіть число");

if (num === 0) {
    console.log(`Число дорівнює нулю`)
}
else if (num % 2 !== 0 && num < 9999999) {
    console.log(`Число непарне`)
}
else if (num % 2 === 0){
    console.log(`Число парне`)
}
else{
    console.log(`Це не число`)
}