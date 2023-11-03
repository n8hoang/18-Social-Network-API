const mongoose = require('mongoose');

// Schema constructor
const { Schema } = mongoose;

// Define UserSchema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  toJSON: {
    virtuals: true
  },
  id: false
});

// Virtual for friendCount
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the User model using UserSchema
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;