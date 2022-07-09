import { MongoClient } from 'mongodb';
import makeProductDB from './product-db';

const url = 'mongodb://localhost:27017';

const db = 'delta'

const client = new MongoClient(url);

export async function makeDB() {
  await client.connect();
  return client.db(db);
}

const productDB = makeProductDB({ makeDB });

export default productDB;