const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TeamSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "teams",
  }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
