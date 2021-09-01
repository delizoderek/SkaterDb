const { Schema, model } = require("mongoose");
const soundtrackSchema = require("./Soundtrack");
const videoLinkSchema = require("./VideoLinks");
const skateVideoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  videoCover: {
    type: String,
    required: false,
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
  vidLink: String,
  soundtrack: [soundtrackSchema],
});

const SkateVideo = model("SkateVideo", skateVideoSchema);

module.exports = SkateVideo;
