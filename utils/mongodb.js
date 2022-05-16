import { MongoClient } from 'mongodb'

const {MONGODB_URI, MONGODB_DB } = process.env

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env')
}

if (!process.env.MONGODB_DB) {
  throw new Error('Please add your Mongo DB to .env')
}


let cached = global.mongodb 

if(!cached) {
  cached = global.mongodb = {conn: null, promise: null}
}

export async function connectToDatabase() {
  if(cached.conn){
    return cached.conn
  }

  if(!cached.promise){
    const opts = {
      useNewUrlPaser: true,
      useUnifiedTopology: true
    }

    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB)
      }
    })
  }
}

cached.conn = await cached.promise