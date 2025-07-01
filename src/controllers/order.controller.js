const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const orderService = require('../services/order.service');

const createOrder = catchAsync(async (req, res) => {
  const order = await orderService.createOrder(req.body);
  res.status(httpStatus.CREATED).send(order);
});

const getAllOrders = catchAsync(async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.status(httpStatus.OK).send(orders);
});

const getOrderById = catchAsync(async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  if (!order) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Order not found' });
  }
  res.status(httpStatus.OK).send(order);
});

const getOrdersByUserId = catchAsync(async (req, res) => {
  const orders = await orderService.getOrdersByUserId(req.params.userId);
  res.status(httpStatus.OK).send(orders);
});

const updateOrder = catchAsync(async (req, res) => {
  const order = await orderService.updateOrder(req.params.id, req.body);
  if (!order) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Order not found' });
  }
  res.status(httpStatus.OK).send(order);
});

const deleteOrder = catchAsync(async (req, res) => {
  const deletedOrder = await orderService.deleteOrder(req.params.id);
  if (!deletedOrder) {
    return res.status(httpStatus.NOT_FOUND).send({ message: 'Order not found' });
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByUserId,
  updateOrder,
  deleteOrder,
};
