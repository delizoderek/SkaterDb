const { Schema, model } = require('mongoose');

const skaterSchema = new Schema (
    {
        pronouns: {
            type: String,
            required: false,

        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        stance: {
            type: String,
            enum: ['Regular','Goofy','Both','Unknown'],
            default: 'Unknown',
            required: false,
        },
        videos: [
            {
                type: Schema.Types.ObjectId,
                ref: "SkateVideo",
            }
        ]
    },
);

const Skater = model ('Skater', skaterSchema);

module.exports = Skater;