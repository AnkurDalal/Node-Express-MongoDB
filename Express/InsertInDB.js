const dbConnect=require('./MongoConnectFile')


const insert=async ()=>{
    const db= await dbConnect()
    const data= await db.insertMany(
        [
        {name:"iphone 15",brand:"Apple",category:"Mobiles",price:90000},
        {name:"iphone 15max",brand:"Apple",category:"Mobiles",price:95000},
        ]
    )
    console.log(data)
}
insert()