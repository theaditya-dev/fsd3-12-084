import {EventEmitter} from "events";
const button = new EventEmitter();

button.on("click", (uname)=>{
    console.log(`button clicked by ${uname}`);
});

button.emit("click","Tony");
button.emit("click", "Steve");
button.emit("click", "Peter");
button.emit("click");
