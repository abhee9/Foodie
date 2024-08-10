const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema model
const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    minlength: 3,
    required: true,
    unique: true,
  },
  photoURL: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

// Create a model instance
const User = mongoose.model('User', userSchema);

module.exports = User;
