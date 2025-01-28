const prompt = require('prompt-sync')();

if(ano % 4 == 0){

    if(ano%100 == 0){
        if(ano%400 == 0){
            console.log("o ano "+ano+"é bissexto")
        }else{
            console.log("o ano "+ano+"é bissexto")
        }
    }else{
            console.log("o ano "+ano+"é bissexto")
    }
    }else{
        console.log("o ano "+ano+" não é bissexto")
    }