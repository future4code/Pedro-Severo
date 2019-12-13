import * as moment from "moment";
moment.locale("pt-br")

export interface Person {
    name: string;
    birth: moment.Moment;
    email: string; 

    createNew(persons: Person[]): Person[]
};