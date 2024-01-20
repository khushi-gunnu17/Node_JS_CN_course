import { UserEvents } from "./05_userEvents.mjs";

const userEvent = new UserEvents()      // object

// the object has now access to the listener

// separate functions which can also be given below in the second param of the listener.
function saveToDatabase() {
    console.log("Saving post to database.");
}

function sendNotifications() {
    console.log("Sending Notifications");
}

function updateTimeline() {
    console.log("Updating Timeline.");
}

// it takes two param down below , first is the name of the event and the second one is a listener which may take your content and let's say this is for saving the data to the database.
userEvent.addListener("postCreated", saveToDatabase)
userEvent.addListener("postCreated", sendNotifications)
userEvent.addListener("postCreated", updateTimeline)

userEvent.createPost("This is my first Post.");