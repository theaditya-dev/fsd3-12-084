import { EventEmitter } from "node:events";

const login=(name)=>{
 console.log(`${name} logged in`);
};

const start =() =>{
    console.log("systemm starts");
};

const working= (name)=>{
    console.log(`${name} add items to cart`);
};

const checkout = (name) =>{
    console.log(`${name}logged out`);
};

const task = new EventEmitter();
task.once("greet",start);
task.on("greet", login);
task.on("greet",working);
task.on("greet",checkout);
task.once("exit", ()=>{
    console.log("System shutting down");
});

task.emit("greet","Steve Rogers");
task.emit("greet","Bruce Banner");
task.emit("greet","Peter Parker");
task.emit("exit","Manager");