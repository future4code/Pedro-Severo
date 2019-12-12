import * as moment from "moment";

export class Post {
    name: string;
    text: string;
    date: moment.Moment;

    constructor (name: string, text: string) {
        this.name = name;
        this.text = text;
        this.date = moment();
    };
};

export class Error {
    constructor(protected date: moment.Moment) {}

    getError(): void {
        console.log("Mensagem de erro");
    };

};