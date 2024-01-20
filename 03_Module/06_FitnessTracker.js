import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  // here, the exercise parameter will be taken as an object.
  addExercise(exercise) {
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached
    this.progress += exercise.caloriesBurned;

    if(this.progress >= this.goal) {
      // emit a goal reached event
      this.emit("goalReached");

      // Reset the progress to 0 (Optional)
      // this.progress = 0;
    }
  }
}

const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal
  const tracker = new FitnessTracker();

  // Define a listener that sends a congratulatory message when the goal is reached
  const congratulatoryMessageListener = () => {
    console.log("Congratulations! You have reached your fitness goal");
  }

  // Set up the listener for the "goalReached" event
  tracker.on("goalReached", congratulatoryMessageListener)

  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };






// In the provided code, the addListener method is not explicitly used; instead, the on method is used to attach 
// an event listener. The on method is an alias for addListener in the EventEmitter class. Both methods serve the 
// same purpose of attaching a listener to a specific event.

// same as above
// Set up the listener for the "goalReached" event
// tracker.addListener("goalReached", congratulatoryMessageListener);