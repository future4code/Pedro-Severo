const path = require("path");
const fs = require("fs");
const folderName = "textos";
const myPromise = new Promise((resolve, reject) => {
    fs.readdir(folderName, function (err, files) {
        if (err) {
            reject("Um erro aconteceu");
            console.error(err);
            return;
        }
        ;
        files.forEach(function (file) {
            console.log(file);
        });
        resolve(files);
    });
});
myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error("Deu ruim", error);
});
//# sourceMappingURL=ex1.js.map