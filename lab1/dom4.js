import { EventEmitter } from "events";

// Create an EventEmitter object
const form = new EventEmitter();

// Register the event listener
form.on("submit", (username, password) => {
  console.log("Form submitted successfully!");
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);
});

// Emit (trigger) the event
form.emit("submit", "abc@abc.com", "11223322");
