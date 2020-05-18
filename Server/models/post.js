const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const URLSlugs = require("mongoose-url-slugs");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "",
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  source: {
    type: String,
  },
  photo: {
    data: Buffer,
    contenType: String,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
  },
  postType: {
    type: String,
    required: true,
  },
  freeOrPaid: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
  likes: [{ type: ObjectId, ref: "User" }],
  comments: [
    {
      text: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: ObjectId, ref: "User" },
    },
  ],
});

postSchema.plugin(URLSlugs("title", { field: "myslug" }));

module.exports = mongoose.model("Post", postSchema);
