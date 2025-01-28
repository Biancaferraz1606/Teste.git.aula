const prompt = require('prompt-sync')();

for (let i = 0; i<2;i++){
    let ehPalindromo= true;
    var palavra = vetoe[i]
    for (let j = 0; j < palavra.length/2; j++){
        if(palavra[j] !== palavra[palavra.length - 1 - j]){
            ehPalindromo = false;
            break;
        }
       if (ehPalindromo){
        console.log(palavra)
       }
    }
}