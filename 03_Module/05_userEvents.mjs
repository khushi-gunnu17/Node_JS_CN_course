// const EventEmitter = require("events")
import EventEmitter from "events"       // importing a class and not everything from the module.

// class user
export class UserEvents extends EventEmitter {

    // emitting a functionality as an event, so the event listeners can hear about it.
    createPost(content) {
        console.log("Post is created.");
        this.emit("postCreated")    // naming an event
    }
}