import * as moment from "moment";
import { Person } from "./person";

export class Teacher implements Person {
    constructor (
        public name: string, 
        public birth: moment.Moment, 
        public email: string, 
        public expertises: string[]
    ) {};

    createNew (): void {

    };
};