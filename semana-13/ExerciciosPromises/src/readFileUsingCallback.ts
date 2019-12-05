import { readFile } from 'fs';

const fileName:string = "users.json";

const handleFileRead = (err: Error, data:Buffer) => {
  // Checamos pela existência de erros no processo de leitura.
  if(err){
    console.error(err);
    return;
  }

  // Transformando um Buffer em String
  const fileContent:string = data.toString();
  console.log("Arquivo lido com sucesso:", fileContent);
};

console.log("1");
// Como parâmetro passamos o nome do arquivo e a função que será chamada
// assim que a leitura do arquivo ocorrer
readFile(fileName, handleFileRead);
console.log("2");
