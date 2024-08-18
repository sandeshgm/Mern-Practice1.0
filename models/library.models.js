const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema(
  {
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Student",
      },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
    publisher: {
      type: String,
      required: false,
    },
    language: {
      type: String,
      required: false,
    },
    pubDate: {
      type: String,
      required: false,
    },
   
  },
  { timestamps: true }
);

const Library = mongoose.model("Library", librarySchema);

module.exports = Library;
