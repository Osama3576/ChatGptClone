import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  email: String,
  name: String,

  dataforCon: {
    type: [
      {
        text: String,
        content: String,
      },
    ],
    default: [],
  },

  userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const ConversationModel =
  mongoose.models.ConversationModel ||
  mongoose.model('ConversationModel', conversationSchema);

export default ConversationModel;
