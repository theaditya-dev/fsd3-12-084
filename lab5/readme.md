# Express
> Fast , unopinionated , minimalist web framework for node.js

## Steps 

 1. create folder lab5
 2. create two folder  ( frontend and backend) in root ( lab5)
 3. open terminal and reach to backend by 
        ``` cd ..
        cd lab 5
        cd backend 
        
          ```
4. type ` npm init -y `
5. install nodemon ` npm i nodemon -d`
6. install backend / package.json
7. update backend/ package.json
 - change type ` type : " module" `
 - change  script
 ``` 
  script :{
    "start": "node app.js",
    "dev" : "nodemon prg1.js"
  }
 ```
8. add ` lab5/backend/node_modules` to .gitignore
9.  create `prg1.js` in backend
10. write the script below to start express server 

```
app.get("/", (req, res) => {
  res.send("Hello Express");
});

// this line must be last line
app.listen(4444, () => console.log("prg1 is running at 4444"));

```