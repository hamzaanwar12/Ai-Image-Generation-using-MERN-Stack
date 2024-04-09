import mongoose from 'mongoose';

// Define the schema
const myDellESchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const dellEModel = mongoose.model('dellE', myDellESchema);

export default dellEModel