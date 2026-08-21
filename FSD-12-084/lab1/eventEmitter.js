import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`${name} logged in`);
};

const start = () => {
  console.log("system starts");
};

const working = (name) => {
  console.log(`${name} add items to cart`);
};

const checkout = (name) => {
  console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.on("greet", start);
task.on("greet", login);
task.on("greet", working);
task.on("greet", checkout);

task.once("exit", ()=> {
    console.log("Systems shutting down");
});

task.emit("greet", "Sahitya kasaudhan");
task.emit("greet", "Vinayak");
task.emit("greet", "Vamika");

task.emit("exit", "Manager")

// starts();
// login("Aditya kasaudhan");
// working("Amazon")
// checkout("Aditya!")
