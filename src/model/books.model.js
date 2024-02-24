import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  body: {
    type: String,
  },
});
const booksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    author: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    genre: [{ type: String }],
    pages: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    reviews: [reviewsSchema],
  },
  { timestamps: true }
);
export const Book = mongoose.model("Book", booksSchema);
