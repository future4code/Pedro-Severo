"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    ;
    saveToJSON(objectToSave) {
        fs_1.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
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