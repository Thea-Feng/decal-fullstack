const express = require('express');
const authMiddleware = require('../middleware/auth');
const Listing = require('../models/Listing');
const upload = require('../utils/imageUpload');

const router = express.Router();

// Get all listings
router.get('/', authMiddleware, async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a listing by id
router.get('/:id', authMiddleware, async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return res.status(404).json({ message: 'Listing not found' });
      }
      res.json(listing);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
// Create a new listing
router.post('/', authMiddleware, upload.array('images', 3), async (req, res) => {
    const { startDate, endDate, location, price, beds, baths, amenities, roommates, roommateInfo, rating } = req.body;
  
    try {
      const newListing = new Listing({
        user: req.user.id,
        startDate,
        endDate,
        location,
        price,
        beds,
        baths,
        amenities,
        images: req.files.map((file) => file.path),
        roommates,
        roommateInfo,
        rating,
      });
  
      const savedListing = await newListing.save();
      res.json(savedListing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          message: 'An error occurred while processing your request',
          error: error.message,
          stack: error.stack 
        });
    }
  });  

// Update a listing
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    if (listing.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to update this listing' });
    }

    const updatedListing = await Listing.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedListing);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/search', authMiddleware, async (req, res) => {
    try {
      const { location, minPrice, maxPrice, beds, baths, sortBy, order } = req.query;
  
      // Build the search query
      let query = {};
  
      if (location) {
        query.location = { $regex: new RegExp(location, 'i') }; // Case-insensitive search
      }
  
      if (minPrice || maxPrice) {
        query.price = {};
  
        if (minPrice) {
          query.price.$gte = minPrice;
        }
  
        if (maxPrice) {
          query.price.$lte = maxPrice;
        }
      }
  
      if (beds) {
        query.beds = beds;
      }
  
      if (baths) {
        query.baths = baths;
      }
  
      // Build the sorting options
      let sortOptions = {};
      if (sortBy && order) {
        sortOptions[sortBy] = order.toLowerCase() === 'asc' ? 1 : -1;
      }
  
      // Execute the query
      const listings = await Listing.find(query).sort(sortOptions);
      res.json(listings);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
});
  

// Delete a listing
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    if (listing.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to delete this listing' });
    }

    await Listing.findByIdAndRemove(req.params.id);
    res.json({ message: 'Listing deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
