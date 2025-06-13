const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const sireperksRoute = require('./sireperks.route');
const getQuoteRoute = require('./getquote.route');
const categoryRoute = require('./category.route');
const SubCategoryRoute = require('./subcategory.route');
const portfolioRoute = require('./portfolio.route');
const productRoute = require('./products.route');
const blogCategoryRoute = require('./blogcategory.route');
const blogAuthorRoute = require('./blogauthor.route');
const blogRoute = require('./blogs.route');
const contactusRoute = require('./contactus.route');
const aboutusRoute = require('./aboutus.route');
const privacyRoute = require('./privacy.route');
const termRoute = require('./term.route');
const newsletterRoute = require('./newsletter.route');
const uploadRoute = require('./upload.route');
const testimonialRoute = require('./testimonial.route');
const carouselimageRoute = require('./carouselimage.route');
const searchtrackerRoute = require('./searchtracker.route');
const customerfeedbackRoute = require('./customerfeedback.route');
const refundPolicyRoute = require('./refundpolicy.route');
const navItemsRoute = require('./navitems.route');
const faqRoute = require('./faq.route');
const dielineForm = require('./dielineform.route');
const instantQuoteRoute = require('./instantquote.route');
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
    path: '/getquote',
    route: getQuoteRoute,
  },
  {
    path: '/category',
    route: categoryRoute,
  },
  {
    path: '/subcategory',
    route: SubCategoryRoute,
  },
  {
    path: '/portfolio',
    route: portfolioRoute,
  },
  {
    path: '/upload',
    route: uploadRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/blogs',
    route: blogRoute,
  },
  {
    path: '/blogauthor',
    route: blogAuthorRoute,
  },
  {
    path: '/blogcategory',
    route: blogCategoryRoute,
  },
  {
    path: '/contactus',
    route: contactusRoute,
  },
  {
    path: '/aboutus',
    route: aboutusRoute,
  },
  {
    path: '/privacy',
    route: privacyRoute,
  },
  {
    path: '/term',
    route: termRoute,
  },
  {
    path: '/newsletter',
    route: newsletterRoute,
  },
  {
    path: '/testimonial',
    route: testimonialRoute,
  },
  {
    path: '/searchtracker',
    route: searchtrackerRoute,
  },
  {
    path: '/carouselimage',
    route: carouselimageRoute,
  },
  {
    path: '/customerfeedback',
    route: customerfeedbackRoute,
  },
  {
    path: '/faq',
    route: faqRoute,
  },
  {
    path: '/refundpolicy',
    route: refundPolicyRoute,
  },
  {
    path: '/navitems',
    route: navItemsRoute,
  },
  {
    path: '/instantquote',
    route: instantQuoteRoute,
  },
  {
    path: '/dielineform',
    route: dielineForm,
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
