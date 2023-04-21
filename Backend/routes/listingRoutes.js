const express = require('express');
const authMiddleware = require('../middleware/auth');
const Listing = require('../models/Listing');
const upload = require('../utils/imageUpload');
const fs = require("fs");

const router = express.Router();

// Utility function to build the search query
function buildSearchQuery({ location, minPrice, maxPrice, beds, baths }) {
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

    return query;
}

// Utility function to build sorting options
function buildSortOptions({ sortBy, order }) {
    let sortOptions = {};

    if (sortBy && order) {
        sortOptions[sortBy] = order.toLowerCase() === 'asc' ? 1 : -1;
    }

    return sortOptions;
}

// Search route
router.get('/search', authMiddleware, async (req, res) => {
    try {
      const searchQuery = buildSearchQuery(req.query);
      const sortOptions = buildSortOptions(req.query);
  
      const listings = await Listing.find(searchQuery).sort(sortOptions);
      res.json(listings);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

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
    req.body = JSON.parse(req.body.json);
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
        });
    }
});


// Update a listing
router.put("/:id", authMiddleware, upload.array("images", 3), async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
  
      if (!listing) {
        return res.status(404).json({ message: "Listing not found" });
      }
  
      if (listing.user.toString() !== req.user.id) {
        return res.status(401).json({ message: "Not authorized to update this listing" });
      }
  
      // If new images are uploaded
      if (req.files && req.files.length > 0) {
        // Parse JSON data
        req.body = JSON.parse(req.body.json);
  
        // Remove old images from the server
        listing.images.forEach((imagePath) => {
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.error("Error deleting old image:", err);
            }
          });
        });
  
        // Update the images field with new images
        req.body.images = req.files.map((file) => file.path);
      }
  
      // Update the listing with the provided fields
      const updatedListing = await Listing.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.json(updatedListing);
    } catch (error) {
      console.error("Error in the update route:", error); // Log the error for better understanding
      res.status(500).json({ message: "Server Error" });
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
