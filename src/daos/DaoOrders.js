import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect();

class DaoOrders {
  constructor() {
    this.order = client.db("milaPatisserie").collection("orders");
  }

  async getOrders() {
    try {
      return await this.order.find().toArray();
      // console.log(await this.product.find().toArray())
    } catch (error) {
      throw new Error(error);
    }
  }

  async addOrder(order) {
    try {
      await this.order.insertOne(order);
      console.log("added")
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async findOrder(id) {
    try {
      await this.order.findOne({ _id: id });
      console.log("find");
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async removeOrder(id) {
    try {
      await this.order.findOneAndDelete({ _id: id });
      console.log("removed");
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default DaoOrders;
