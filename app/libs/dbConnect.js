import mongoose from 'mongoose';

const MONGODB_URI =
  'mongodb+srv://oshahbaz74:5VDgxbZjQroAVOZg@natourcluster.wk9acd2.mongodb.net/chatGptDb?retryWrites=true';

if (!MONGODB_URI) {
  throw new Error('please define the mongo_db url');
}

async function dbConnect() {
  return mongoose.connect(MONGODB_URI);
}

export default dbConnect;
