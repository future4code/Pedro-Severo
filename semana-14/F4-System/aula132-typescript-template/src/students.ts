import { Person } from "./person";
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

    createNew (students: Student[]): Student[] {
        return students
    };
};