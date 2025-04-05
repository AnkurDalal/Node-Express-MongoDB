const dbConnect=require('./MongoConnectFile')


const update=async()=>{
    const db=await dbConnect()
    const result= await db.updateOne({name:'iphone 15'},{$set:{price:98000}})
    console.log(result)
}
update()