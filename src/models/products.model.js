const mongoose = require('mongoose');

// Portfolio Detail Schema (Only Images)
const portfolioDetailSchema = new mongoose.Schema({
  images: [
    {
      type: String, // Can store the file path or URL for the image
      required: true, // Ensure that images are provided
    },
  ],
});

// Product Detail Main Schema (Sub-schema for title and images)
const productDetailmainSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // Can store the file path or URL for the image
      required: true,
    },
  ],
  specifications: {
    boxStyle: {
      type: String, // Store box style information
      required: false,
    },
    dimensions: {
      type: String, // Store dimensions of the product
      required: false,
    },
    quantity: {
      type: Number, // Store quantity of the product
      required: false,
    },
    includedOptions: {
      type: String, // Store included options for the product
      required: false,
    },
    additionalOptions: {
      type: String, // Store any additional options for the product
      required: false,
    },
    proof: {
      type: String, // Store proof (like a sample or verification)
      required: false,
    },
    shipping: {
      type: String, // Store shipping details or shipping options
      required: false,
    },
    preferredDesignFile: {
      type: String, // Store the preferred design file or link
      required: false,
    },
    assembling: {
      type: String, // Store assembling details for the product
      required: false,
    },
  },
  relatedPortfolio: [
    {
      image: {
        type: String, // Related portfolio image URL or path
        required: true,
      },
      details: {
        type: portfolioDetailSchema, // Embedding the Portfolio Detail Schema
        required: true,
      },
    },
  ],
  stockType: [
    {
      image: {
        type: String, // Stock type image URL or path
        required: true,
      },
      title: {
        type: String, // Title for the stock type
        required: true,
      },
      description: {
        type: String, // Description of the stock type
        required: true,
      },
    },
  ],
  finishingAssortment: [
    {
      image: {
        type: String, // Finishing assortment image URL or path
        required: true,
      },
      title: {
        type: String, // Title for the finishing assortment
        required: true,
      },
      description: {
        type: String, // Description of the finishing assortment
        required: true,
      },
    },
  ],
  productDescription: [
    {
      title: {
        type: String, // Title of the product description section
        required: true,
      },
      description: {
        type: String, // Detailed description for the product section
        required: true,
      },
    },
  ],
});

// Product Detail Schema (Sub-schema for related products and descriptions)
const productDetailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Can store the file path or URL for the image
    required: true,
  },
  titlerelatedProducts: [
    {
      image: {
        type: String, // Related product image URL or path
        required: true,
      },
      title: {
        type: String, // Related product title
        required: true,
      },
      details: {
        type: productDetailmainSchema, // Embedding the Product Detail Main Schema
        required: true,
      },
    },
  ],
  description: [
    {
      title: {
        type: String, // Title of the description section
        required: true,
      },
      description: {
        type: String, // Detailed description for the product
        required: true,
      },
    },
  ],
});

// Product Schema (Main schema)
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Can store the file path or URL for the image
    required: true,
  },
  category: {
    type: String, // Store the category as a string
    required: true,
  },
  details: {
    type: productDetailSchema, // Embedding the Product Detail Schema
    required: true,
  },
});

// Product Model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
