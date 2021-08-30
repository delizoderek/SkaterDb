const { Schema } = require('mongoose');

const vidLinkSchema = new Schema(
    {
        linkTitle:{
            type: String,
            required: false,
        },
        link:{
            type: String,
            required: true,
        }
    }
);

module.exports = vidLinkSchema;
