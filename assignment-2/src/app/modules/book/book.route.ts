import express from "express";
import {
  getBooksByGenreAndPublisher,
  getPopularBooks,
} from "./book.controller";

const router = express.Router();

router.get("/popular-books", getPopularBooks);
router.get("/books", getBooksByGenreAndPublisher);
export default router;
