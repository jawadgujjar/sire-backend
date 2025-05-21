const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// ================== SUB-SCHEMAS ================== //
const variantDetailSchema = new mongoose.Schema({
  material: { type: [String], required: true }, // e.g., ["Kraft Paper", "Cardboard"]
  colormodel: { type: [String], required: true }, // e.g., ["CMYK", "Pantone"]
  finishing: { type: [String], required: true }, // e.g., ["Matte", "Glossy"]
  addon: [String], // e.g., ["Handle Cutouts", "Foam Inserts"]
  turnaround: { type: [String], required: true }, // e.g., ["5 Days", "Express 24H"]
  faqs: [
    {
      question: String,
      answer: String,
    },
  ],
});

const variantSpecificationSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const variantSchema = new mongoose.Schema({
  variantTitle: { type: String, required: true },
  variantDescription: { type: String, required: true },
  sku: {
    type: String,
    default: () => `SKU-${uuidv4().split('-')[0].toUpperCase()}`,
    unique: true,
  },
  price: { type: Number, required: true },
  salePrice: Number, // For promotions
  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    unit: { type: String, default: 'in' },
  },
  weight: {
    value: { type: Number, required: true },
    unit: { type: String, default: 'oz' },
  },
  variantDetail: { type: variantDetailSchema, required: true },
  variantSpecifications: [variantSpecificationSchema],
  detailTitle: String,
  detailSubtitle: String,
  detailDescription: [
    {
      description: String,
      image: String,
    },
  ],
});

const specificationSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const shippingSchema = new mongoose.Schema({
  country: { type: String, default: 'US', required: true },
  region: String, // e.g., "California"
  service: { type: String, default: 'Standard', required: true },
  price: { type: Number, default: 0, required: true },
  minHandlingTime: { type: Number, default: 1 }, // in days
  maxHandlingTime: { type: Number, default: 3 }, // in days
});

// ================== MAIN PRODUCT SCHEMA ================== //
const productSchema = new mongoose.Schema(
  {
    // Core Identifiers
    identifierExists: { type: Boolean, default: true },
    gtin: { type: String, required: true }, // Global Trade Item Number
    mpn: { type: String, required: true }, // Manufacturer Part Number

    // Categorization
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
    ],
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
      },
    ],
    googleProductCategory: {
      type: String,
      required: true,
      default: 'Office Supplies > General Office Supplies > Shipping Supplies > Boxes',
    },
    productType: {
      type: String,
      default: 'Packaging Boxes>Custom Printed Boxes',
    },

    // Product Content
    title: { type: String, required: true },
    image: { type: String, required: true }, // Main image (800x800+ recommended)
    additionalImages: [String], // At least 2-3 extra images
    description: { type: String, required: true, minlength: 150 }, // Detailed description
    brand: { type: String, default: 'SirePrinting', required: true },
    condition: {
      type: String,
      enum: ['new', 'used', 'refurbished'],
      default: 'new',
      required: true,
    },
    availability: {
      type: String,
      enum: ['in stock', 'out of stock', 'preorder'],
      default: 'in stock',
      required: true,
    },

    // Pricing
    price: { type: Number, required: true },
    priceCurrency: { type: String, default: 'USD', required: true },
    salePrice: Number,
    salePriceEffectiveDate: {
      start: Date,
      end: Date,
    },

    // Shipping
    shipping: [shippingSchema],
    shippingWeight: {
      value: Number,
      unit: { type: String, default: 'oz' },
    },

    // Variants
    variants: [variantSchema],

    // Specifications
    specifications: [specificationSchema],

    // Reviews
    reviews: [
      {
        name: String,
        rating: { type: Number, min: 1, max: 5 },
        comment: String,
        date: { type: Date, default: Date.now },
      },
    ],
    averageRating: { type: Number, default: 0 },

    // SEO
    seoTitle: String,
    seoDescription: String,
    seoKeyword: [String],

    // Google Shopping Attributes
    adult: { type: Boolean, default: false },
    isBundle: { type: Boolean, default: false },
    multipack: { type: Number, default: 1 },
    customizable: { type: Boolean, default: true },
    minimumOrderQuantity: { type: Number, default: 1 },
  },
  { timestamps: true }
);

// Auto-generate SKU if not provided
productSchema.pre('save', function (next) {
  if (!this.sku) {
    this.sku = `SKU-${uuidv4().split('-')[0].toUpperCase()}`;
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
