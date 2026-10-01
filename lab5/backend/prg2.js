import express from "express"
import path from 'path'
import {fileURLToPath} from "node:url";
const app = express();

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
app.get("/",(req,res)=>{
  res.sendFile(path.join(dirname,'pages','product.html'));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "contact.html"));
});
// this is must be last 
app.use((req,res)=>{
    res.status(404).send("<h1>page not found</h1>");
});
app.listen(4444,()=> console.log("prg2 is running 4444"));