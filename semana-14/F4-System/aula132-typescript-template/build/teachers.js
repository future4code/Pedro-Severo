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
}
exports.Teacher = Teacher;
;
class Teachers {
    constructor(fileManager) {
        this.all = [];
        this.fileManager = fileManager;
    }
    ;
    createNew(teacher) {
        this.all.push(teacher);
    }
    ;
    saveStudents() {
        for (let student of this.all) {
            return student;
        }
        ;
    }
    ;
}
exports.Teachers = Teachers;
;
//# sourceMappingURL=teachers.js.map