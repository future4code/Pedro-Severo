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