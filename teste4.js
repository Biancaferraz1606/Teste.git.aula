const prompt = require('prompt-sync')();

var raio = Number(prompt("digite aqui o tamanho do raio do circulo"));
var pi = 3.14159;

var area = pi * (raio * raio)
var area = pi * (raio ** 2)
console.log("A area do circulo é: "+area)