const Order = require('../models/order.model');

const createOrder = async (data) => {
  return Order.create(data);
};

const getAllOrders = async () => {
  return Order.find().populate('userId').sort({ createdAt: -1 });
};

const getOrderById = async (id) => {
  return Order.findById(id).populate('product userId');
};

const getOrdersByUserId = async (userId) => {
  return Order.find({ userId }).populate('userId').sort({ createdAt: -1 });
};

const updateOrder = async (id, data) => {
  return Order.findByIdAndUpdate(id, data, { new: true }).populate('userId');
};

const deleteOrder = async (id) => {
  return Order.findByIdAndDelete(id);
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByUserId,
  updateOrder,
  deleteOrder,
};
