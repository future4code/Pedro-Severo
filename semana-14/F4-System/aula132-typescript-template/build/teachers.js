"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
class Teacher {
    constructor(name, birth, email, expertises) {
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.expertises = expertises;
    }
    ;
    createNew(teachers) {
        return teachers;
    }
    ;
}
exports.Teacher = Teacher;
;
//# sourceMappingURL=teachers.js.map