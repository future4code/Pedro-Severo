import * as moment from "moment";
import { writeFileSync, readFileSync } from "fs";
import { Post } from './post';

export interface ErrorPrinter {
    getError(): void;
};

export class JSONFileManager implements ErrorPrinter {
    fileName: string;

    constructor (fileName: string) {
        this.fileName = fileName;
    };

    getError() {
        console.log(`Ocorreu um erro ${moment()}`);
    };

    saveToJSON(objectToSave: Post) {
        if (!objectToSave.name || !objectToSave.text) {
            this.getError()
        } else {
            writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
        };
    };

    getObjectFromFile (): object {
        return JSON.parse(readFileSync(this.fileName).toString());
    };
};