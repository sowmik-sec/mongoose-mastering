import { Request, Response } from "express";
import {
  getBooksByGenreAndPublisherFromDb,
  getBooksByGenreFromDb,
} from "./book.service";

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
