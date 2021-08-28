const ProSkater = require('./Skater');
const SkateVideo = require('./SkateVideo');
const Brand = require('./Brand');
const ProToVideo = require('./ProToVideo');

// TODO: A brand can have multiple skate videos
Brand.hasMany(SkateVideo,{
    foreignKey: 'video_id',
    onDelete: 'SET NULL',
});

// TODO: A skate video is only tied to one brand
SkateVideo.belongsTo(Brand,{
    foreignKey:'video_id',
});

// TODO: A Skate Video can have multiple skaters
ProSkater.belongsToMany(SkateVideo,{
    foreignKey: 'pro_id',
    through: ProToVideo
});
// TODO: A Skater can be in multiple skate videos
SkateVideo.belongsToMany(ProSkater,{
    foreignKey: 'video_id',
    through: ProToVideo
});

module.exports = {
    ProSkater,
    SkateVideo,
    Brand,
    ProToVideo
}