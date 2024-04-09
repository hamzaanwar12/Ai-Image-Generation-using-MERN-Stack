import mongoose from 'mongoose';

// Define the schema
const myPostSchema = new mongoose.Schema({
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
const postModel = mongoose.model('MyModel', myPostSchema);

export default postModel