import mongoose from 'mongoose';

const { Schema } = mongoose;

const mutantSchema = new Schema({
  dna: { type: String, required: true, unique: true },
});

export default mongoose.model('MutantSchema', mutantSchema);
