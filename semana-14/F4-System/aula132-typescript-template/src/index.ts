import {JSONFileManager} from "./JSONFileManager";
import { WebFSClassroom, MobileClassroom, Classroom } from './classroom';
import { Teacher, Teachers } from './teachers';
import { Student, Students } from './students';
import * as moment from "moment";
moment.locale("pt-br")

const studentsFileManager = new JSONFileManager("students.json");
const teachersFileManager = new JSONFileManager("teachers.json");
const webFSStudents: Student[] = [];
const mobileStudents: Student[] = [];

const students: Students =  new Students(studentsFileManager);
const teachers: Teachers = new Teachers(teachersFileManager);

const yodaWebFS: WebFSClassroom = new WebFSClassroom(moment("02/01/2020", "DD/MM/YYYY"), moment("02/07/2020", "DD/MM/YYYY"), webFSStudents, teachers.all, "Mestre Yoda");
const turma1Mobile: MobileClassroom = new MobileClassroom(moment("02/06/2020", "DD/MM/YYYY"), moment("23/12/2020", "DD/MM/YYYY"), mobileStudents, teachers.all, 1);

const student1: Student = new Student("Pedro", moment("06/12/1994", "DD/MM/YYYY"), "phsevero@gmail", yodaWebFS);
const student2: Student = new Student("Amanda", moment("14/10/1995", "DD/MM/YYYY"), "amanda@gmail", yodaWebFS);
const student3: Student = new Student("Daniel", moment("22/01/1990", "DD/MM/YYYY"), "daniel@gmail", turma1Mobile);
const student4: Student = new Student("Kelson",moment("30/07/1992", "DD/MM/YYYY"), "kelson@gmail", turma1Mobile);

const teacher1: Teacher = new Teacher("Soter", moment("05/05/1995"), "soter@gmail", ["caçador de bugs", "react", "css", "front-end"]);
const teacher2: Teacher = new Teacher("Darvas", moment("05/05/1998"), "darvas@gmail", ["node", "react", "fullstack"]);
const teacher3: Teacher = new Teacher("Goli", moment("05/05/1996"), "goli@gmail", ["node", "poo", "back-end"]);

const saveStudents = (): void => {
    students.createNew(student1)
    students.createNew(student2)
    students.createNew(student3)
    students.createNew(student4)

    studentsFileManager.saveToJSON(students.all)
};

saveStudents();

const saveTeachers = (): void => {
    teachers.createNew(teacher1);
    teachers.createNew(teacher2);
    teachers.createNew(teacher3);

    teachersFileManager.saveToJSON(teachers.all);
};

saveTeachers();

// const saveStudents = () => {
//     studentsFileManager.saveToJSON(student1);
//     const studentsFromJSON: any = studentsFileManager.getObjectFromFile();
//     studentsFileManager.saveToJSON(bank.saveAccounts(newTransaction, user1, accountsFromJSON));


// };