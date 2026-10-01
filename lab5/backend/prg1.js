import express from "express";
const app = express();


app.get("/",(req,res) => {
    // res.send("Hello express");
    // res.send("<h1>Hello express</h1>"); 

    res.end(`
        <h1>Hello express</h1>
        <h2> This is my first express app</h2>
        <h3> The code is minimal and easy to return </h3>
        `);

});

app.get("/about",(req,res) => {
    res.send(
        "<h2> This is about page</h2>"
    )
});

app.get("/products",(req,res) => {
    const products = {
        id: 1,
        name: "Mobile",
        price: 10000,
    }
    res.send(products);
});

// this line must be last line 
app.listen(4444, () => console.log("prg1 is running at 4444"));