const mongoose = require('mongoose');
const User = require('./User');

const ListingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  amenities: [
    {
      type: String,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  roommates: {
    type: Number,
    required: true,
  },
  roommateInfo: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },    
  }, 
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
  
ListingSchema.virtual('contactInfo', {
    ref: 'User',
    localField: 'user',
    foreignField: '_id',
    justOne: true,
});
  
ListingSchema.pre(/^find/, function(next) {
    this.populate('contactInfo', 'email phoneNumber');
    next();
})

module.exports = mongoose.model('Listing', ListingSchema);
