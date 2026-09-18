<<<<<<< HEAD
const login = (name) => {
    console.log(`${name} logged in`);
};

login("Aditya kasaudhan");

const start = () => {
    console.log("system starts");
};

const working = (name) => {
    console.log(`${name} add items to cart`);
} 

const checkout = (name) => {
    console.log(`${name} logged out`);
} 
=======
//DOM-> document object model
import{EventEmitter} from "events";
const button  = new EventEmitter();

button.on("click",()=>{
    console.log("Button Clicked");
});
button.emit("click");
>>>>>>> 38fdb2a (new commit)
