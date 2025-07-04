const Order = require('../models/order.model');

const createOrder = async (data) => {
  return Order.create(data);
};

const getAllOrders = async (filter, options) => {
  const orders = await Order.find(filter)
    .populate('userId')
    .sort((options && options.sort) || { createdAt: -1 });
  return orders;
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
