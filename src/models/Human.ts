import mongoose from 'mongoose';

const { Schema } = mongoose;

const humanSchema = new Schema({
  dna: { type: String, required: true, unique: true },
});

export default mongoose.model('HumanSchema', humanSchema);
