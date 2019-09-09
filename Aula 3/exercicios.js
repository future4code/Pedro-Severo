// Coding together

function ex1 () {

const idade = Number(prompt("Qual é a sua idade?"));

if(idade >= 3 && idade <= 4) {
  console.log("Mirim");
} 
else if(idade >= 5 && idade <= 7){
  console.log("Infantil A");
} 
else if(idade >= 8 && idade <= 10){
  console.log("Infantil B");
}
else if(idade >= 11 && idade <= 13){
  console.log("Juvenil A");
}
else if(idade >= 14 && idade <= 17){
  console.log("Juvenil B");
}
else if(idade >= 18 && idade <= 50){
  console.log("Adulto");
}
else if(idade >= 51 && idade <= 100){
  console.log("Veterano");
}

}

// segundo 

function ex2 () {

const numero = Number(prompt("Coloque um número"));

if(numero % 2 === 0) {
  console.log("o número é par");
} 
else {
  console.log("o número é impar");
}

}

// terceiro

function ex3 () {

const ano = Number(prompt("coloque um ano"));

if (ano % 4 !== 0 || ano % 400 !== 0 && ano % 100 === 0) {
  console.log("o ano não é bissexto."); 
} 
else if (ano % 400 === 0 || ano % 4 === 0) {
  console.log("o ano é bissexto.");
}



}

