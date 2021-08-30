const { Schema, model } = require("mongoose");

const brandSchema = new Schema({
  brandName: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  skateVideos: [
    {
      type: Schema.Types.ObjectId,
      ref: "SkateVideo",
    },
  ],
});

const Brand = model("Brand", brandSchema);

module.exports = Brand;
