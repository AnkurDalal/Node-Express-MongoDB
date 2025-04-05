const express = require("express");
const mongoDb=require('mongodb')
const app = express();
const dbConnect = require("./MongoConnectFile");

app.use(express.json())
//get method
app.get('',async(req,resp)=>{
   let db= await dbConnect()
   db=await db.find().toArray()
   resp.send(db)
})
//post method
app.post('',async (req,resp)=>{
    let db=await dbConnect()
    db=await db.insertMany(req.body)
    resp.send(db)
})
//put method
app.put('',async (req,resp)=>{
    let db= await dbConnect()
    db= await db.updateOne({name:"vivo 12g"},{$set:{price:14000}})
    resp.send(db)
}) 

//delete method
app.delete('/:id',async (req,resp)=>{
    console.log(req.params.id)
      let db=await dbConnect()
      let result=await db.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
      resp.send(result)
})

app.listen(5000, () => {
  console.log("application is running on port 5000 !");
});
