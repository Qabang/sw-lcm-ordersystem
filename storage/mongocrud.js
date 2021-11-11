import Mongo from 'mongodb'
const ObjectId = Mongo.ObjectId // Needed for the querying in findAll with objectId.

class MongoCRUD {
  constructor(db, collection) {
    this.db = db
    this.collection = this.db.collection(collection)
  }

  async getAll() {
    try {
      return await this.collection.find({}).toArray()
    } catch (err) {
      throw new Error(`Error ${this.collection}.getAll`, err)
    }
  }

  async getAllById(id) {
    try {
      return await this.collection.find({ userId: id }).toArray()
    } catch (err) {
      throw new Error(`Error ${this.collection}.getOne with id: ${id}`, err)
    }
  }

  async getOrdersByProductId(uid, pid) {
    console.log(`products.${pid}`)
    try {
      //db.myCollection.find({ 'makes.fgh': { $exists: true } })
      return await this.collection
        .find({ userId: uid, [`products.${pid}`]: { $exists: true } })
        .toArray()
    } catch (err) {
      throw new Error(`Error ${this.collection}.getOne with id: ${id}`, err)
    }
  }

  async getOne(id) {
    try {
      return await this.collection.findOne(new ObjectId(id))
    } catch (err) {
      throw new Error(`Error ${this.collection}.getOne with id: ${id}`, err)
    }
  }

  async createOne(data) {
    try {
      await this.collection.insertOne(data)
    } catch (err) {
      throw new Error(
        `Error ${this.collection}.createOne with data: ${data}`,
        err
      )
    }
  }

  async deleteOne(id) {
    try {
      await this.collection.deleteOne({ _id: new ObjectId(id) })
    } catch (err) {
      throw new Error(`Error ${this.collection}.deleteOne with id: ${id}`, err)
    }
  }

  async updateOne(id, data) {
    try {
      return await this.collection.updateOne(
        { _id: ObjectId(id) },
        { $set: data }
      )
    } catch (err) {
      throw new Error(`Error ${this.collection}.updateOne with id: ${id}`, err)
    }
  }
}

export { MongoCRUD }
