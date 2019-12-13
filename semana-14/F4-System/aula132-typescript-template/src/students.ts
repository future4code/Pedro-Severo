import * as moment from "moment";
import { Person } from "./person";
import { Classroom } from "./classroom";

export class Student implements Person {
    constructor (
        public name: string, 
        public birth: moment.Moment, 
        public email: string, 
        public classroom: Classroom
    ) {};

    createNew (): void {

    };
};