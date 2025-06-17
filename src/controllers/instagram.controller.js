const catchAsync = require('../utils/catchAsync');
const instagramService = require('../services/instagram.service');

const getFeed = catchAsync(async (req, res) => {
  const posts = await instagramService.getInstagramPosts('sireprinting');
  res.json(posts);
});

module.exports = {
  getFeed,
};
