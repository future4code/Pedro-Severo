import { writeFileSync, readFileSync } from "fs";

export class JSONFileManager {
    fileName: string;

    constructor (fileName: string) {
        this.fileName = fileName;
    };

    saveToJSON(objectToSave: object) {
        writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
    };

    getObjectFromFile (): object {
        return JSON.parse(readFileSync(this.fileName).toString());
    };
};