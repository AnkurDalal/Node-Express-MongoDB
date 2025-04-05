const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "Files");
fs.mkdirSync(dirPath, { recursive: true });
console.log(dirPath);
/*for (let i = 1; i < 6; i++) {
  fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple text file");
}*/

fs.readdir(dirPath,(err,files)=>{
       files.forEach((files)=>{
        console.log(files)
       })
})