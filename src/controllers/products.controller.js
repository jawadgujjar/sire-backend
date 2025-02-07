const productService = require('../services/products.service');
const { createProduct, updateProduct, getProductById } = require('../validations/products.validation');

const createProductHandler = async (req, res) => {
  try {
    const { error } = createProduct.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const product = await productService.createProduct(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

const getAllProductsHandler = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

const getProductByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = getProductById.validate({ id });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

const updateProductHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = updateProduct.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const updatedProduct = await productService.updateProduct(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

const deleteProductHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
  deleteProductHandler,
};
