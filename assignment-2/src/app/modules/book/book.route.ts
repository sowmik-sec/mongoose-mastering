import express from "express";
import { getBooksByGenreAndPublisher } from "./book.controller";

const router = express.Router();

router.get("/books", getBooksByGenreAndPublisher);
export default router;
