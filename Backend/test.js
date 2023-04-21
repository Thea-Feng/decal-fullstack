const mongoose = require('mongoose');
const Listing = require('./models/Listing');

const MONGOURI = "mongodb://127.0.0.1:27017/fullstack-project"; // Replace with your own MongoDB URI

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', async () => {
  console.log('Connected to MongoDB');

  try {
    const listings = await Listing.find({});
    console.log('Listings:', listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
  }

  mongoose.connection.close();
});
