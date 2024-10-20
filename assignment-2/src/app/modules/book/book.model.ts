import mongoose, { Schema } from "mongoose";
import { IBook } from "./book.interface";

export const bookSchema = new Schema<IBook>({
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

export const Book = mongoose.model<IBook>("books", bookSchema);
