import { Person } from "./person";
import * as moment from "moment";

moment.locale("pt-br")


export class Teacher implements Person {
    constructor (
        public name: string, 
        public birth: moment.Moment, 
        public email: string, 
        public expertises: string[]
    ) {};

    createNew (teachers: Teacher[]): Teacher[] {
        return teachers
    };
};