const { MongoClient } = require("mongodb");
const dataBase = "e-comm";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbConnect = async () => {
  const result = await client.connect();
  let db = result.db(dataBase);
  return  db.collection("Products");
 // let resp = await collection.find().toArray();
  //console.log(resp);
};

module.exports=dbConnect