
import {readFile , appendFile, writeFile } from "fs/promises";

const readData = async(filename) => {
    try{
const content = await readFile(filename , "utf-8");
return content ;
    }
    catch ( e){
        console.log(e.message);
        console.log("File not foud ")
    }
    finally {
        console.log("Read data finished ")
    }

};

const writeData =async (filename,content)=>{
    try{

await writeFile(filename ,content);
    }
    catch ( error){
        console.log(error.message);
    }
};

const appendData= async(filename, content)=>{
    try{
        await appendFile(filename, content)
await appendFile(filename, content );
    }catch(error){
        console.log(error.message);
    }
};

const deleteFile  = async (filename) => {
    try{
        await unlike (filename);

    }
    catch (error){
        console.log("file not found")
    }
};
const data =await readData("file.js");
console.log(data);

// note - if a function uses a await keyword then the function must be async

// keywords 
// try , catch , finally , throw 