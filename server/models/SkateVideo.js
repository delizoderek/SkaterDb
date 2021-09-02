const { Schema, model } = require("mongoose");
const soundtrackSchema = require("./Soundtrack");
const videoLinkSchema = require("./VideoLinks");
const skateVideoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: false,
    default: "",
  },
  videoCover: {
    type: String,
    required: false,
    default: "",
  },
  vidLink: {
    type: String,
    default: "",
  },
  brands: [{
    type: Schema.Types.ObjectId,
    ref: "Brand",
  }],
  skaters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skater",
    },
  ],
  soundtrack: [String],
});

const SkateVideo = model("SkateVideo", skateVideoSchema);

module.exports = SkateVideo;
