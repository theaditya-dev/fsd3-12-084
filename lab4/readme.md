# NPM Project

1. goto project folder (by cd)
2. type ```npm init -y```
3. open package.json
4. update ```type:module```
5. install nodemon ```npm i nodemon -D```
6. update script in packahe.json

```

script{
    "start" : "node app.js",
    "dev" : "nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use `npm run dev`