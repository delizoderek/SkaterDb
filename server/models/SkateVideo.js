const { Schema, model } = require('mongoose');

const skateVideoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        release_date:{
            type: Date,
            required: true,
        },
        vidLink:{
            type: String,
            required: true,
        },
    },
);

const SkateVideo = model('SkateVideo', skateVideoSchema);

module.exports = SkateVideo;