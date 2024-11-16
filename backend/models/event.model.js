import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  title: {
    type: String,
    required: true,
    maxlength: 150
  },
  address: {
    type: String,
    maxlength: 300,
    required: function() { return this.type === 'offline'; }
  },
  type: {
    type: String,
    enum: ['online', 'offline'],
    required: true
  },
  desc: {
    type: String,
    required: true,
    maxlength: 1000
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  theme: {
    type: String,
    required: true,
    maxlength: 200
  },
  location: {
    type: String,
    required: true,
    maxlength: 200
  },
  venue: {
    type: String,
    trim: true,
    maxlength: 150
  },
  attendees: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  eventPosts: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    comment: {
      type: String,
      required: true
    }
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

eventSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Event', eventSchema);

