import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect();

class DaoProducts {
  constructor() {
    this.product = client.db("milaPatisserie").collection("products");
  }

  async getProducts() {
    try {
      return await this.product.find().toArray();
      // console.log(await this.product.find().toArray())
    } catch (error) {
      throw new Error(error);
    }
  }

  async addProduct(product) {
    try {
      await this.product.insertOne(product);
      console.log("added");
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async findProduct(id) {
    try {
      await this.product.findOne({ _id: id });
      console.log("find");
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async removeProduct(id) {
    try {
      await this.product.findOneAndDelete({ _id: id });
      console.log("removed");
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async editProduct(id, product) {
    try {
      await this.product.findOneAndUpdate(
        { _id: id },
        { $set: product },
        { upsert: true }
      );
      console.log("edited");
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export default DaoProducts;
