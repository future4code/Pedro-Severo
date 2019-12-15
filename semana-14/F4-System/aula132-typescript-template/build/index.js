"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const classroom_1 = require("./classroom");
const teachers_1 = require("./teachers");
const students_1 = require("./students");
const moment = require("moment");
moment.locale("pt-br");
const studentsFileManager = new JSONFileManager_1.JSONFileManager("students.json");
const teachersFileManager = new JSONFileManager_1.JSONFileManager("teachers.json");
const webFSStudents = [];
const mobileStudents = [];
const students = new students_1.Students(studentsFileManager);
const teachers = new teachers_1.Teachers(teachersFileManager);
const yodaWebFS = new classroom_1.WebFSClassroom(moment("02/01/2020", "DD/MM/YYYY"), moment("02/07/2020", "DD/MM/YYYY"), webFSStudents, teachers.all, "Mestre Yoda");
const turma1Mobile = new classroom_1.MobileClassroom(moment("02/06/2020", "DD/MM/YYYY"), moment("23/12/2020", "DD/MM/YYYY"), mobileStudents, teachers.all, 1);
const student1 = new students_1.Student("Pedro", moment("06/12/1994", "DD/MM/YYYY"), "phsevero@gmail", yodaWebFS);
const student2 = new students_1.Student("Amanda", moment("14/10/1995", "DD/MM/YYYY"), "amanda@gmail", yodaWebFS);
const student3 = new students_1.Student("Daniel", moment("22/01/1990", "DD/MM/YYYY"), "daniel@gmail", turma1Mobile);
const student4 = new students_1.Student("Kelson", moment("30/07/1992", "DD/MM/YYYY"), "kelson@gmail", turma1Mobile);
const teacher1 = new teachers_1.Teacher("Soter", moment("05/05/1995"), "soter@gmail", ["caçador de bugs", "react", "css", "front-end"]);
const teacher2 = new teachers_1.Teacher("Darvas", moment("05/05/1998"), "darvas@gmail", ["node", "react", "fullstack"]);
const teacher3 = new teachers_1.Teacher("Goli", moment("05/05/1996"), "goli@gmail", ["node", "poo", "back-end"]);
const saveStudents = () => {
    students.createNew(student1);
    students.createNew(student2);
    students.createNew(student3);
    students.createNew(student4);
    studentsFileManager.saveToJSON(students.all);
};
saveStudents();
const saveTeachers = () => {
    teachers.createNew(teacher1);
    teachers.createNew(teacher2);
    teachers.createNew(teacher3);
    teachersFileManager.saveToJSON(teachers.all);
};
saveTeachers();
//# sourceMappingURL=index.js.map