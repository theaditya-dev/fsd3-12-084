<<<<<<< HEAD
import {writeFile , appendFile, readFile} from "fs/promises";
// await writeFile("hello.txt","i am Iron Man");
await appendFile("hello.txt","\nFS is much easier than others 😊");
const content= await readFile("hello.txt","utf-8");
console.log(content);
=======
import {writeFile , appendFile, readFile} from "fs/promises";
// await writeFile("hello.txt","i am Iron Man");
await appendFile("hello.txt","\nFS is much easier than others 😊");
const content= await readFile("hello.txt","utf-8");
console.log(content);
>>>>>>> 38fdb2a (new commit)
