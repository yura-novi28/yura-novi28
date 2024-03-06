let username = prompt("Введіть ім'я:");

if (username > -9999){
    console.log('Я вас не знаю')
}

else if (username == null){
    console.log("Вхід скасований")
}

else{
    let password = prompt("Введіть пароль:");
    if (password == "ЛОГОС"){
        console.log("Ласкаво просимо!")
    }
    else if (password == null){
        console.log("Вхід скасований")
    }
    else{
        console.log("Пароль невірний")
    }
}