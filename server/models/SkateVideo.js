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
  },
  videoCover: {
    type: String,
    required: false,
  },
  vidLink: {
    type: String,
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
