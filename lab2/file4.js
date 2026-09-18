<<<<<<< HEAD
import { mkdir} from "fs/promises";
//create a recursive directory 
// await mkdir("uploads/resume",{recursive:true});

//create a single directory 
// await mkdir("uploads/images");

//reove directory 
=======
import { mkdir} from "fs/promises";
//create a recursive directory 
// await mkdir("uploads/resume",{recursive:true});

//create a single directory 
// await mkdir("uploads/images");

//reove directory 
>>>>>>> 38fdb2a (new commit)
await rm("uploads",{recursive:true });