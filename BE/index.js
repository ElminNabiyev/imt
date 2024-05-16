import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

const productSchema = new mongoose.Schema({
  name: String,
  imgURL: String,
  price: Number,
  desc: String,
});

const product = mongoose.model("product", productSchema);

app.get("/product", async (req, res) => {
  const getDatas = await product.find();
  res.send(getDatas);
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const getDatasById = await product.findById(id);
  res.send(getDatasById);
});
app.post("/product", async (req, res) => {
  const body = req.body;
  const addData = new product(body);
  await addData.save();
  res.send(addData);
});
app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateDatasById = await product.findByIdAndUpdate(id, body);
  res.send(updateDatasById);
});
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  const deleteDatasById = await product.findByIdAndDelete(id);
  res.send(deleteDatasById);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect("mongodb+srv://LordOfElmin:Lordofelmin12@elmin.1dhi0zk.mongodb.net/")
  .then(() => console.log("Connected!"));
