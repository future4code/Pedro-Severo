"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events = "events.json";
const getEvents = (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const eventsJSONContent = data.toString();
    console.log("Arquivo lido com sucesso:", eventsJSONContent);
};
//# sourceMappingURL=calendar.js.map