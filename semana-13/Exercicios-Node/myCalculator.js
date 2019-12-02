const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

if (operation === "add") {
    console.log(`Resposta: ${firstNumber + secondNumber}`);
} else if (operation === "sub") {
    console.log(`Resposta: ${firstNumber - secondNumber}`);
} else if (operation === "mult") {
    console.log(`Resposta: ${firstNumber * secondNumber}`);
} else if (operation === "div") {
    console.log(`Resposta: ${firstNumber / secondNumber}`);
}