import { readFile } from 'fs';
const fs = require("fs")

const folderName: string = "textos";

const myPromise = new Promise((resolve, reject) => {

});

function returnFileName(string: string): any {
    fs.readdir(folderName, function(err: any, files: []) {
        if (err) {
          console.error(err);
          return
        };

        files.forEach(function(file) {
            readFile(file, myPromise)
        });
    });
} 

myPromise.then((result) => {
    console.log(result);
}).catch((error) => { 
    console.error("Deu ruim", error);
});

// RESOLUÇÃO FEITA PELO SOTER: 

// const fs = require('fs');
// const pathDir = ("./textos/");
// ​
// const readAllFilenames = (path: string) => {
//     return new Promise<string[]>((resolve, reject) => {
//         fs.readdir(path, 'utf8', function (err: Error, files: string[]) {
//             if (err) {
//                 console.log("Não foi possível encontrar os arquivos na pasta.");
//                 reject(err);
//             }
//             else {
//                 resolve(files);
//             }
//         });
//     });
// }
// const readFile = (path: string, file: string) => {
//     return new Promise<string>((resolve, reject) => {
//         fs.readFile(`${pathDir}${file}`, 'utf8', (err: Error, data: Buffer[]) => {
//             if (err) {
//                 console.error("Não foi possível encontrar o arquivo.");
//                 reject(err);
//             }
//             else {
//                 resolve(data.toString());
//             }
//         });
//     });
// }
// ​
// const concatAllTextFromFiles = async (path: string) => {
//     const allFiles:string[] = await readAllFilenames(path);
//     const allPromises:Promise<string>[] = allFiles.map(file => readFile(path, file));
//     const allText:string[] = await Promise.all(allPromises);
//     console.log(allText.join(''))
// }
// ​
// concatAllTextFromFiles(pathDir);