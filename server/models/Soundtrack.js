const { Schema } = require('mongoose');

const soundtrackSchema = new Schema(
    {
        segmentTitle:{
            type: String,
            required: false,
        },
        songTitle:{
            type: String,
            required: true,
        },
        artist:{
            type: String,
            required: true,
        }
    }
);

module.exports = soundtrackSchema;
