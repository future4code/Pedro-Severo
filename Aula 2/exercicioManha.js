// Exercício 1

const idade = prompt("Qual é a sua idade? (ao final deste ano)");
const anoAtual = 2019;

console.log("Ano de nascimento: ", anoAtual - idade);

const diasDeIdade = idade * 365;
console.log("Dias de idade: ", diasDeIdade);

const horasDeIdade = diasDeIdade * 24;
console.log("Horas de idade: ", horasDeIdade);

const segundosDeIdade = horasDeIdade * 1440;
console.log("Segundos de idade: ", segundosDeIdade);

// Exercício 2

const peso = prompt("Qual é o seu peso?");
const altura = prompt("Qual é o sua altura (em metros)?");

console.log("Valor do IMC: ", peso / [altura * altura]);