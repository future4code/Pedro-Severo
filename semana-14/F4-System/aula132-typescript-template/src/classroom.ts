import { Teacher } from './teachers';
import { Student } from './students';
import * as moment from "moment";
moment.locale("pt-br")

export abstract class Classroom {
    constructor (
        public startDate: moment.Moment, 
        public endDate: moment.Moment, 
        public students: Student[], 
        public teachers: Teacher[]
    ) {};
};


export class WebFSClassroom extends Classroom {
    classRoomName: string;

    constructor (
        startDate: moment.Moment, 
        endDate: moment.Moment, 
        students: Student[], 
        teachers: Teacher[],
        classRoomName: string
    ) {
        super(
            startDate, 
            endDate, 
            students, 
            teachers
        );
        this.classRoomName = classRoomName;
    };
};

export class MobileClassroom extends Classroom {
    classRoomNumber: number;

    constructor (
        startDate: moment.Moment, 
        endDate: moment.Moment, 
        students: Student[], 
        teachers: Teacher[],
        classRoomNumber: number
    ) {
        super(
            startDate, 
            endDate, 
            students, 
            teachers
        );
        this.classRoomNumber = classRoomNumber;
    };
};
