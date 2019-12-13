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
    createNew(students) {
        return students;
    }
    ;
}
exports.Student = Student;
;
//# sourceMappingURL=students.js.map