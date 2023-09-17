import mongoose from 'mongoose';
const userQuerySchema = new mongoose.Schema({
  Created_date: { type: Date, default: Date.now },
  text: {
    type: String,
    required: true,
  },
});

const UserQuery =
  mongoose.models.UserQuery ||
  mongoose.model('UserQuery', userQuerySchema);

export default UserQuery;
