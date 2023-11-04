const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => createdAtVal.toISOString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

// Virtual for reactionCount
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the Thought model using ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// Export the Thought model
module.exports = Thought;