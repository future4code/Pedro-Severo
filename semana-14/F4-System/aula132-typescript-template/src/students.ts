import { JSONFileManager } from './JSONFileManager';
import { Person, PeopleManager } from "./person";
import { Classroom } from "./classroom";
import * as moment from "moment";
moment.locale("pt-br")


export class Student implements Person {
    constructor (
        public name: string, 
        public birth: moment.Moment, 
        public email: string, 
        public classroom: Classroom
    ) {};
};

export class Students implements PeopleManager {
    all: Student[];
    fileManager: JSONFileManager;

    constructor(fileManager: JSONFileManager) {
        this.all = [];
        this.fileManager = fileManager;
    };

    createNew(student: Student) {
        this.all.push(student);
    };

    saveStudents() {
        for (let student of this.all) {
            return student
        };
    };
};