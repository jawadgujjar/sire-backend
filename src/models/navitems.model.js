const mongoose = require('mongoose');

const navItemSchema = new mongoose.Schema(
  {
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    position: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('NavItem', navItemSchema);
