import { Request, Response } from "express";
import {
  getBooksByGenreAndPublisherFromDb,
  getBooksByGenreFromDb,
} from "./book.service";
import { Book } from "./book.model";

export const getBooksByGenreAndPublisher = async (
  req: Request,
  res: Response
) => {
  const genre: string =
    typeof req.query.genre === "string" ? req.query.genre : "";
  const publisher: string | null =
    typeof req.query.publisher === "string" ? req.query.publisher : null;
  console.log(genre, publisher);
  if (!publisher) {
    const books = await getBooksByGenreFromDb(genre);
    res.status(200).json(books);
  } else {
    const books = await getBooksByGenreAndPublisherFromDb(genre, publisher);
    res.status(200).json(books);
  }
};

export const getPopularBooks = async (req: Request, res: Response) => {
  const books = await Book.getPopularBooks();
  res.status(200).json(books);
};

export const updatePriceField = async (req: Request, res: Response) => {
  const result = await Book.makePriceFieldToNumber();
  res.status(200).json({ message: "Prices updated successfully", result });
};
