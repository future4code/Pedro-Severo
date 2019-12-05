import * as moment from "moment";
import { readFile } from 'fs';


type event = {
    name: string,
    description: string, 
    date: Date,
};

const events: string = "events.json";

const getEvents = (err: Error, data:Buffer) => {
    if(err){
        console.error(err);
        return;
    }

    const eventsJSONContent:string = data.toString();
    console.log("Arquivo lido com sucesso:", eventsJSONContent);
}

readFile(events, getEvents);