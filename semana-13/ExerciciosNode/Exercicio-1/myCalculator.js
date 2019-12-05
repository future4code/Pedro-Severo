const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);


if (firstNumber === false || secondNumber === false) {
    console.log("É necessário colocar um número válido.")
} else if (operation !== "add" || operation !== "sub" || operation !== "mult" || operation !== "div") {
    console.log("É necessário colocar uma operação matemática válida.");
} else {
    if (operation === "add") {
        console.log(`Resposta: ${firstNumber + secondNumber}`);
    } else if (operation === "sub") {
        console.log(`Resposta: ${firstNumber - secondNumber}`);
    } else if (operation === "mult") {
        console.log(`Resposta: ${firstNumber * secondNumber}`);
    } else if (operation === "div") {
        console.log(`Resposta: ${firstNumber / secondNumber}`);
    }
};