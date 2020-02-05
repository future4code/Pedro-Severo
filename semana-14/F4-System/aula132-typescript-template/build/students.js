"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
class Student {
    constructor(name, birth, email, classroom) {
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.classroom = classroom;
    }
    ;
}
exports.Student = Student;
;
class Students {
    constructor(fileManager) {
        this.all = [];
        this.fileManager = fileManager;
    }
    ;
    createNew(student) {
        this.all.push(student);
    }
    ;
    print(students) {
        console.log(students);
    }
    ;
}
exports.Students = Students;
;
//# sourceMappingURL=students.js.map