// const EventEmitter = require("events")
// custom events 

import EventEmitter from "events"       // importing a class and not everything from the module events.

// class user
export class UserEvents extends EventEmitter {

    // emitting a functionality as an event, so the event listeners can hear about it.
    createPost(content) {
        console.log("Post is created.");
        this.emit("postCreated")    // naming an event
    }
}