const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  brand: String,
  price: Number,
});

const saveInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const productModel = mongoose.model("products", productSchema);
  let data = new productModel({
    name: "Pavilion",
    category: "Laptops",
    brand: "HP",
    price: 68000,
  });

  let result = await data.save();
  console.log(result);
};
saveInDB();

const updateInDb = async () => {
  const productModel = mongoose.model("products", productSchema);
  const data = await productModel.updateOne(
    { name: "Pavilion" },
    { $set: { price: 80000 } }
  );
  console.log(data);
};
updateInDb();

const deleteInDb = async () => {
  const productModel = mongoose.model("products", productSchema);
  let data = await productModel.deleteOne({ name: "Victus" });
  console.log(data);
};
deleteInDb();
