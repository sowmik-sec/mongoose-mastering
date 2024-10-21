import express from "express";
import {
  getBooksByGenreAndPublisher,
  getPopularBooks,
  updatePriceField,
} from "./book.controller";

const router = express.Router();

router.get("/popular-books", getPopularBooks);
router.put("/update-prices", updatePriceField);
router.get("/books", getBooksByGenreAndPublisher);
export default router;
