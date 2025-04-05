const express = require("express");
require("./config");
const app = express();

const Product = require("./product");
app.use(express.json());

//post method
app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(req.body);
});
//get method
app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});
//delete method
app.delete("/delete/:_id", async (req, resp) => {
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});
//put method
app.put("/update/:_id", async (req, resp) => {
  let data = await Product.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.listen(3000, () => {
  console.log("application is running on port 3000 !");
});
