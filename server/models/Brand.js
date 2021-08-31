const { Schema, model } = require("mongoose");

const brandSchema = new Schema({
  brandName: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
    minlength: 0,
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
