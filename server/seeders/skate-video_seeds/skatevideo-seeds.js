const { SkateVideo } = require('../../models');

const seedCategories = () => SkateVideo.bulkCreate(categoryData);

module.exports = seedCategories;