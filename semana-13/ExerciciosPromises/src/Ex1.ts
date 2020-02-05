const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Acabou");
  }, 2000)
});


// Versão Assíncrona
console.log("Antes da Promise");
myPromise.then((response) => {
  console.log(response); // "Acabou"
  console.log("Promise Finalizada com sucesso.");
});
console.log("Depois da Promise");

// Versão Síncrona (dentro da função)
// const teste = async () => {
//   await myPromise;
//   console.log("Promise Finalizada com sucesso.");
// };
