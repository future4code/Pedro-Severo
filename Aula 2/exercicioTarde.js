//1a

const abacate = 3.99;
const leite = 2.39;
const aveia = 7.99;
const acucar = 2.74;

const vitaminaDeAbacate = abacate + leite + aveia + acucar

console.log("R$", + vitaminaDeAbacate);



//1b

const fahrenheitToCelsius = ("32 fahrenheits são iguais a " + 0 + " celsius.");

console.log(fahrenheitToCelsius);


const fahrenheitToKelvin = ("32 fahrenheits são iguais a " + 255.928 + " kelvins.");

console.log(fahrenheitToKelvin);


//2a

const fahrenheit = prompt("Coloque a temperatura em fahrenheit:");

console.log([fahrenheit - 32] * 5 / 9, " celsius");
console.log([fahrenheit - 32] * 5 / 9 + 273.15, " kelvins");


//2b

const primeiroNome = prompt("Qual é o seu primeiro nome?");
const segundoNome = prompt("Qual é o seu segundo nome?");

console.log(primeiroNome + " " + segundoNome)


//2c

const rua = prompt("Qual é a sua Rua?");
const numeroRua = prompt("Qual o número da sua Rua?");
const complemento = prompt("Qual é o complemento?");
const bairro = prompt("Qual é o seu Bairro?");
const cidade = prompt("Qual é a sua cidade?");

console.log(rua + " " + numeroRua + " " + complemento + " " + bairro + " " + cidade)


//3a

const casaDestrancada = confirm("A casa está Destrancada?");
const temChave = confirm("Você tem a chave de casa?");

console.log(casaDestrancada || temChave)


//3b

const estaChovendo = confirm ("Está chovendo?");
const temGuardaChuva = confirm ("Você tem guarda-chuva?");

console.log(estaChovendo && !temGuardaChuva)


//4a

const valorSalarioMinimo = prompt("Qual é o valor do salário mínimo?");
const consumoDeEnergia = prompt("Quantos quilowatts sua residência consumiu?");
const valorASerPago = valorSalarioMinimo / 5 * consumoDeEnergia;


console.log("O valor do quilowatt é: R$", valorSalarioMinimo / 5)

console.log(valorASerPago)
console.log(valorASerPago * 0.85)


