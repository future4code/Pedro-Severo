import { JSONFileManager } from './JSONFileManager';
import { Person, PeopleManager } from "./person";
import * as moment from "moment";
moment.locale("pt-br");

export class Teacher implements Person {
    constructor (
        public name: string, 
        public birth: moment.Moment, 
        public email: string, 
        public expertises: string[]
    ) {};
};

export class Teachers implements PeopleManager {
    all: Teacher[];
    fileManager: JSONFileManager;

    constructor(fileManager: JSONFileManager) {
        this.all = [];
        this.fileManager = fileManager;
    };

    createNew(teacher: Teacher) {
        this.all.push(teacher);
    };

    print(teachers: Teacher[] | Teacher): void {
        console.log(teachers);
    };
};