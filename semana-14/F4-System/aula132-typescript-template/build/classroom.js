"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
class Classroom {
    constructor(startDate, endDate, students, teachers) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.students = students;
        this.teachers = teachers;
    }
    ;
}
exports.Classroom = Classroom;
;
class WebFSClassroom extends Classroom {
    constructor(startDate, endDate, students, teachers, classRoomName) {
        super(startDate, endDate, students, teachers);
        this.classRoomName = classRoomName;
    }
    ;
}
exports.WebFSClassroom = WebFSClassroom;
;
class MobileClassroom extends Classroom {
    constructor(startDate, endDate, students, teachers, classRoomNumber) {
        super(startDate, endDate, students, teachers);
        this.classRoomNumber = classRoomNumber;
    }
    ;
}
exports.MobileClassroom = MobileClassroom;
;
//# sourceMappingURL=classroom.js.map