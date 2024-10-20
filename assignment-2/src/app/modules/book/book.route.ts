import express from "express";
import { getBooksByGenre } from "./book.controller";

const router = express.Router();

router.get("", getBooksByGenre);

export default router;
