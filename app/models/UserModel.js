import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true, // Allows multiple null email values
  },
  emailVerified: Date,
  image: String,
  hashedPassword: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  conversationIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ConversationModel',
    },
  ],

  accounts: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  ],
});

const User =
  mongoose.models.User || mongoose.model('User', userSchema);

export default User;
