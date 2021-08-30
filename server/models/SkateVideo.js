const { Schema, model } = require('mongoose');
const soundtrackSchema = require('./Soundtrack');
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
        videoCover:{
            type: String,
            required: false,
        },
        vidLink:{
            type: String,
            required: true,
        },
        skaters: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Skater',
            }
        ],
        soundtrack: [soundtrackSchema]
    },
);

const SkateVideo = model('SkateVideo', skateVideoSchema);

module.exports = SkateVideo;