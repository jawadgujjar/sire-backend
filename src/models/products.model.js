const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// ================== SUB-SCHEMAS ================== //
const variantDetailSchema = new mongoose.Schema({
  material: { type: [String], required: true },
  colormodel: { type: [String], required: true },
  finishing: { type: [String], required: true },
  addon: { type: [String], default: [] },
  turnaround: { type: [String], required: true },
  faqs: [
    {
      question: { type: String },
      answer: { type: String },
    },
  ],
});

const variantSpecificationSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const variantSchema = new mongoose.Schema({
  variantTitle: { type: String, required: true },
  variantDescription: { type: String, required: true },
  slug: { type: String, unique: true },
  sku: {
    type: String,
    default: () => `SKU-${uuidv4().split('-')[0].toUpperCase()}`,
    unique: true,
    index: true,
  },
  price: { type: Number, required: true },
  salePrice: { type: Number },
  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    unit: { type: String, default: 'in' },
  },
  variantDetail: { type: variantDetailSchema, required: true },
  variantSpecifications: { type: [variantSpecificationSchema], default: [] },
  detailTitle: { type: String },
  detailSubtitle: { type: String },
  seoTitle: { type: String },
  seoDescription: { type: String },
  detailDescription: [
    {
      description: { type: String },
      image: { type: String },
    },
  ],
});

const specificationSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const shippingSchema = new mongoose.Schema({
  country: { type: String, default: 'US', required: true },
  region: { type: String },
  service: { type: String, default: 'Standard', required: true },
  price: { type: Number, default: 0, required: true },
  minHandlingTime: { type: Number, default: 1 },
  maxHandlingTime: { type: Number, default: 3 },
});

const reviewSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5 },
  comment: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// ================== MAIN PRODUCT SCHEMA ================== //
const productSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      default: () => `BOX-${uuidv4().split('-')[0].toUpperCase()}`,
      unique: true,
      index: true,
    },
    slug: { type: String, unique: true },
    identifierExists: { type: Boolean, default: true },
    gtin: { type: String, required: true },
    mpn: { type: String, required: true },
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
    title: { type: String, required: true },
    image: { type: String },
    additionalImages: { type: [String], default: [] },
    description: { type: String, required: true },
    pdfImage: { type: String },
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
    price: { type: Number, required: true },
    priceCurrency: { type: String, default: 'GBP', required: true },
    salePrice: { type: Number },
    salePriceEffectiveDate: {
      start: { type: Date },
      end: { type: Date },
    },
    shipping: { type: [shippingSchema], default: [] },

    // Variant-level fields now at product level
    variantDetail: { type: variantDetailSchema },
    variantSpecifications: { type: [variantSpecificationSchema], default: [] },
    detailTitle: { type: String },
    detailSubtitle: { type: String },
    detailDescription: [
      {
        description: { type: String },
        image: { type: String },
      },
    ],
    dimensions: {
      length: { type: Number },
      width: { type: Number },
      height: { type: Number },
      unit: { type: String, default: 'in' },
    },

    variants: { type: [variantSchema], default: [] },
    specifications: { type: [specificationSchema], default: [] },
    reviews: { type: [reviewSchema], default: [] },
    averageRating: { type: Number, default: 0 },
    schemaName: { type: String, required: false },
    seoTitle: { type: String },
    seoDescription: { type: String },
    isBundle: { type: Boolean, default: false },
    multipack: { type: Number, default: 1 },
    customizable: { type: Boolean, default: true },
    minimumOrderQuantity: { type: Number, default: 1 },
  },
  { timestamps: true }
);

// ================== MIDDLEWARE ================== //
productSchema.pre('save', function (next) {
  // Generate SKU if not exists
  if (!this.sku) {
    this.sku = `BOX-${uuidv4().split('-')[0].toUpperCase()}`;
  }

  // Generate SKUs for variants if not exists
  if (Array.isArray(this.variants)) {
    this.variants.forEach((variant) => {
      if (!variant.sku) {
        variant.set('sku', `SKU-${uuidv4().split('-')[0].toUpperCase()}`);
      }
    });
  }

  // Calculate average rating
  if (this.reviews && this.reviews.length > 0) {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    this.averageRating = total / this.reviews.length;
  } else {
    this.averageRating = 0;
  }

  next();
});

module.exports = mongoose.model('Product', productSchema);
