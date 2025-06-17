const puppeteer = require('puppeteer');

const getInstagramPosts = async (username = 'sireprinting') => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  );
  await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle2' });

  // eslint-disable-next-line no-undef
  const posts = await page.evaluate(() => {
    /* eslint-disable no-undef */
    const postElements = document.querySelectorAll('article img');
    return Array.from(postElements).map((post) => ({
      imageUrl: post.src,
      caption: post.alt || 'No caption available',
      postUrl: post.closest('a') ? post.closest('a').href : '',
    }));
    /* eslint-enable no-undef */
  });

  await browser.close();
  return posts;
};

module.exports = { getInstagramPosts };
