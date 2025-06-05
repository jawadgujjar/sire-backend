// controllers/faqController.js
const Faq = require('../models/faq.model');

// Create a new FAQ document (first time only)
exports.createFaqList = async (req, res) => {
  try {
    const { faqs } = req.body;
    const newFaqList = new Faq({ faqs });
    await newFaqList.save();
    res.status(201).json(newFaqList);
  } catch (err) {
    res.status(500).json({ message: 'Error creating FAQ list', error: err.message });
  }
};

// Get all FAQs (should return the single document with array of faqs)
exports.getFaqList = async (req, res) => {
  try {
    const faqList = await Faq.findOne(); // Since there's only one document
    res.status(200).json(faqList);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching FAQ list', error: err.message });
  }
};

// Add one FAQ item to the array
exports.addFaqItem = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faqList = await Faq.findOne();

    if (!faqList) return res.status(404).json({ message: 'FAQ list not found' });

    faqList.faqs.push({ question, answer });
    await faqList.save();

    res.status(200).json(faqList);
  } catch (err) {
    res.status(500).json({ message: 'Error adding FAQ item', error: err.message });
  }
};

// Update specific FAQ item by its index
exports.updateFaqItem = async (req, res) => {
  try {
    const { index } = req.params;
    const { question, answer } = req.body;

    const faqList = await Faq.findOne();
    if (!faqList || !faqList.faqs[index]) {
      return res.status(404).json({ message: 'FAQ item not found' });
    }

    faqList.faqs[index] = { question, answer };
    await faqList.save();

    res.status(200).json(faqList);
  } catch (err) {
    res.status(500).json({ message: 'Error updating FAQ item', error: err.message });
  }
};

// Delete specific FAQ item by index
exports.deleteFaqItem = async (req, res) => {
  try {
    const { index } = req.params;

    const faqList = await Faq.findOne();
    if (!faqList || !faqList.faqs[index]) {
      return res.status(404).json({ message: 'FAQ item not found' });
    }

    faqList.faqs.splice(index, 1);
    await faqList.save();

    res.status(200).json({ message: 'FAQ item deleted', faqs: faqList.faqs });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting FAQ item', error: err.message });
  }
};
