const promise1: Promise<number> = new Promise((resolve, reject) => {
  const tempoEmSegundos: number = 1;

  setTimeout(() => {
    resolve(5);
  }, tempoEmSegundos * 1000)
});

const promise2: Promise<number> = new Promise((resolve, reject) => {
  const tempoEmSegundos: number = 4;

  setTimeout(() => {
    resolve(10);
  }, tempoEmSegundos * 1000)
});

const promise3: Promise<number> = new Promise((resolve, reject) => {
  const tempoEmSegundos: number = 5;

  setTimeout(() => {
    resolve(15);
  }, tempoEmSegundos * 1000)
});

Promise.all([promise1, promise2, promise3]).then((values: number[]) => {
  console.log(values)
});
