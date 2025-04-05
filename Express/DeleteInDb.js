const dbConnect=require('./MongoConnectFile')

const remove=async ()=>{
   const db= await dbConnect()
   const data=await db.deleteOne({name:"iphone 15"})
   console.log(data)
}
remove()