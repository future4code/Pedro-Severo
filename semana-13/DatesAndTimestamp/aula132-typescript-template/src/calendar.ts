import * as moment from "moment";
import { readFile, writeFile } from 'fs';

type event = {
    name: string,
    description: string, 
    date: any,
};

const event1: event = {
    name: "comprar pão",
    description: "comprar pão no supermercado",
    date: moment.now()
}

const fileName: string = "events.json";

let events: event[] = [];

const createEvent = (event: event, err: any, data:Buffer): event[] => {
    if(err){
        console.error(err);
        return;
    }
    
    events = [...events, event]
    readFile(fileName, getEvents);
    return events
}

const getEvents = (err: any, data:Buffer) => {
    if(err){
        console.error(err);
        return;
    }

    const eventsJSONContent: any = [...events, data.toString()];
    console.log("Arquivo lido com sucesso:", eventsJSONContent);
};

writeFile(fileName, event1, createEvent)