const express = require('express');
const validate = require('../../middlewares/validate');
const orderValidation = require('../../validations/order.validation');
const orderController = require('../../controllers/order.controller');

const router = express.Router();

// POST - Create a new order
router.route('/').post(validate(orderValidation.createOrder), orderController.createOrder).get(orderController.getAllOrders);

// GET, PATCH, DELETE - Order by ID (MongoDB ObjectId only)
router
  .route('/:id([0-9a-fA-F]{24})')
  .get(orderController.getOrderById)
  .patch(validate(orderValidation.updateOrder), orderController.updateOrder)
  .delete(orderController.deleteOrder);

// GET - Orders by user ID
router.route('/user/:userId').get(orderController.getOrdersByUserId);

module.exports = router;
