const dbConnect=require('./MongoConnectFile')
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// }).catch((e)=>{
//     console.log(e)
// })

const main=async ()=>{
    let data=await dbConnect()
    data= await data.find().toArray()
    console.log(data)
}
main()