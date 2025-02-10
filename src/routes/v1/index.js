const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const sireperksRoute = require('./sireperks.route');
const productsRoute = require('./products.route');
const getQuoteRoute = require('./getquote.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/sireperks',
    route: sireperksRoute,
  },
  {
    path: '/products',
    route: productsRoute,
  },
  {
    path: '/getquote',
    route: getQuoteRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
