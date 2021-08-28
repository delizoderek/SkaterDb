const seedProSkater = require('./proskater-seeds');
const seedVideos = require('./skate-video_seeds/skatevideo-seeds');
const seedBrand = require('./brand-seeds');
const seedProToVideo= require('./protovideo-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedProSkater();
  console.log('\n----- Skaters SEEDED -----\n');

  await seedVideos();
  console.log('\n----- Skate Videos SEEDED -----\n');

  await seedBrand();
  console.log('\n----- Brands SEEDED -----\n');

  await seedProToVideo();
  console.log('\n----- ProToVideo SEEDED -----\n');

  process.exit(0);
};

seedAll();