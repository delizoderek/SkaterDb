const { Brand } = require('../models');

const brandData = [
  {
    brand_name: 'Girl',
    video_id: NULL,
  },
  {
    brand_name: 'Girl',
    video_id: NULL,
  },
  {
    brand_name: 'Girl',
    video_id: NULL,
  },
  {
    brand_name: 'Girl',
    video_id: NULL,
  },
  {
    brand_name: 'Girl',
    video_id: NULL,
  },
];

const seedCategories = () => Brand.bulkCreate(categoryData);

module.exports = seedCategories;