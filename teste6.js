const prompt = require('prompt-sync')();

for(i=1; i<=100;i++){
    if ((i%3 == 0) || (i%5 == 0))
    console.log("numero"+i)
}