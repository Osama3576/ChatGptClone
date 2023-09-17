import mongoose from 'mongoose';
const gptSchema = new mongoose.Schema({
  content: String,
  Created_date: { type: Date, default: Date.now },
});

const GptModel =
  mongoose.models.GptModel || mongoose.model('GptModel', gptSchema);

export default GptModel;
