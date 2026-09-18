//DOM-> document object model
import { EventEmitter } from "events";
const button = new EventEmitter();

button.on("click", () => {
  console.log("TASK 1");
});
button.on("click", () => {
  console.log("TASK 2");
});
button.emit("click");
