import * as moment from "moment";

export interface Person {
    name: string;
    birth: moment.Moment;
    email: string; 

    createNew(persons: Person[]): Person[]
};