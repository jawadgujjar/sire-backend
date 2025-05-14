const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID for generating unique SKUs

// Product Detail Schema (Sub-schema for title, images, and specifications)
const productDetailSchema = new mongoose.Schema({
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

// Product Schema (Main schema for product details)
const productSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Category model
      ref: 'Category', // Reference the 'Category' model
    },
    sku: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      default: () => `SKU-${uuidv4().split('-')[0].toUpperCase()}`,
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
          type: productDetailSchema, // Embedding the Product Detail Schema
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
    seoTitle: {
      type: String, // SEO title for the product
      required: false, // SEO title is optional
    },
    seoKeyword: {
      type: String, // SEO keywords for the product (comma-separated keywords)
      required: false, // SEO keywords are optional
    },
    seoDescription: {
      type: String, // SEO description for the product
      required: false, // SEO description is optional
    },
    order: {
      type: Number,
      default: 0, // Default order if not provided
    },
  },
  { timestamps: true }
); // Timestamps for createdAt and updatedAt

// Pre-save middleware to auto-generate SKU
productSchema.pre('save', function (next) {
  if (!this.sku) {
    this.sku = `SKU-${uuidv4().split('-')[0].toUpperCase()}`;
  }
  next();
});

// Product Model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
