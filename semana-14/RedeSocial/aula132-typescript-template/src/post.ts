import { JSONFileManager } from './JSONFileManager';
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

interface Creator {
    createPost (): void;
};

export class PostCreator extends Post implements Creator  {
    createPost(): Post {
        if (this.name.indexOf('&') === 0) {
            this.name = this.name.replace("&", "").toUpperCase();
        } 
        
        if (this.text.indexOf('&') === 0) {
            this.text = this.text.replace("&", "").toUpperCase();
        };

        return new Post(this.name, this.text) 
    };
};
