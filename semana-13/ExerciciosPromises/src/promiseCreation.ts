// Forma simples de criar um array gigante, nesse caso
// 100000 posições, todas as posições to array tem o valor
// de undefined.
const giantArray: undefined[] = [...Array(100000)];

const giantOperation = new Promise((resolve, reject) => {
  // Itera sob o array gigante e retorna o index de cada um dos itens.
  const result = giantArray.map((item:undefined, index:number) => {
    return index;
  });

  console.log("oi");

  // Ao acabar a iteração usamos o método resolve() para indicar que a Promise
  // foi concluída
  resolve(result);
});

console.log('Antes da Promise');

giantOperation.then((result:number[]) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

console.log('Depois da Promise');
