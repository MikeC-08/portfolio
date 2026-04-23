import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('請在 .env.local 中定義 MONGODB_URI');
}
const uri = process.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // 開發模式：使用全域變數保留連線
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // 正式模式：直接連線
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;