"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = `${fileName}.json`;
    }
    saveToFile(objectToSave) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
    }
    getContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
}
class TxtFileManager {
    constructor(fileName) {
        this.fileName = `${fileName}.txt`;
    }
    getContent() {
        return fs.readFileSync(this.fileName).toString();
    }
    saveToFile(value) {
        fs.writeFileSync(this.fileName, value);
    }
}
class FileSystem {
    constructor(files) {
        this.files = files;
    }
    readFiles() {
        const fileContents = this.files.map(file => file.getContent());
        fileContents.forEach(content => console.log(content));
    }
}
const txtFile = new TxtFileManager('arquivo');
const jsonFile = new JSONFileManager('arquivo');
const fileSystem = new FileSystem([txtFile, jsonFile]);
fileSystem.readFiles();
//# sourceMappingURL=index.js.map