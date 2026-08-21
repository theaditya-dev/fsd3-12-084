//DOM-> document object model
import{EventEmitter} from "events";
const button  = new EventEmitter();

button.on("click",()=>{
    console.log("Button Clicked");
});
button.emit("click");