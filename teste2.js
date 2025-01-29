const prompt = require('prompt-sync')();
let numero = (prompt("digite uma senha para ssber"));

var tamanho = senha.length >= 8;
var temNumeros = /\d/.test(senha);
var temMaiusculo = /[A-Z]/.test(senha);
var temMinusculo = /[a-z]/.test(senha);

if(tamanho && temMaiusculo && temMinusculo && temNumeros){
    console.log("senha criada com sucesso")
}else{
    console.log("senha fraca")};