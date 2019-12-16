import { JSONFileManager } from './JSONFileManager';
import * as moment from "moment";
moment.locale("pt-br")

export interface Person {
    name: string;
    birth: moment.Moment;
    email: string; 
};

export interface PeopleManager {
    all: Person[];
    fileManager: JSONFileManager;

    createNew (person: Person): void;
    print(person: Person | Person[]): void;
};