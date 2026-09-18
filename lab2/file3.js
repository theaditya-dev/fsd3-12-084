<<<<<<< HEAD
import {stat} from "fs/promises"
const fstat = await stat ("file.js");
console.log("file size", fstat.size , " bytes ");
console.log(`is file: ${fstat. isFie()}`);
console.log(`is folder: ${fstat.isDirectory()}`);
console.log( `is syslink: ${stat.isSymboliclick()}`);
console.log(`is created on : ${fstat.birthtime}`);
console.log(`last Used: ${fstat.attime}`);
=======
import {stat} from "fs/promises"
const fstat = await stat ("file.js");
console.log("file size", fstat.size , " bytes ");
console.log(`is file: ${fstat. isFie()}`);
console.log(`is folder: ${fstat.isDirectory()}`);
console.log( `is syslink: ${stat.isSymboliclick()}`);
console.log(`is created on : ${fstat.birthtime}`);
console.log(`last Used: ${fstat.attime}`);
>>>>>>> 38fdb2a (new commit)
