"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const fs_1 = require("fs");
;
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    ;
    getError() {
        console.log(`Ocorreu um erro ${moment()}`);
    }
    ;
    saveToJSON(objectToSave) {
        if (!objectToSave.name || !objectToSave.text) {
            this.getError();
        }
        else {
            fs_1.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
        }
        ;
    }
    ;
    getObjectFromFile() {
        return JSON.parse(fs_1.readFileSync(this.fileName).toString());
    }
    ;
}
exports.JSONFileManager = JSONFileManager;
;
//# sourceMappingURL=JSONFileManager.js.map