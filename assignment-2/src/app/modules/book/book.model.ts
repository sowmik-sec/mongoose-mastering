import mongoose, { Schema } from "mongoose";
import { BookModel, IBook } from "./book.interface";

export const bookSchema = new Schema<IBook, BookModel>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: [
    {
      type: String,
      required: true,
    },
  ],
  genre: {
    type: String,
    required: true,
  },
  publication_year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  publisher: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

bookSchema.static("getPopularBooks", async function getPopularBooks() {
  const books = await this.aggregate([
    {
      $match: { rating: { $gte: 4 } },
    },
    {
      $addFields: {
        featured: {
          $cond: {
            if: { $gte: ["$rating", 4.5] },
            then: "best seller",
            else: "popular",
          },
        },
      },
    },
  ]);
  return books;
});

export const Book = mongoose.model<IBook, BookModel>("books", bookSchema);
