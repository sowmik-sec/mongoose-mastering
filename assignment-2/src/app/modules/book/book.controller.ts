import { Request, Response } from "express";
import { getBooksByGenreFromDb } from "./book.service";
export const getBooksByGenre = async (req: Request, res: Response) => {
  const genre: string =
    typeof req.query.genre === "string" ? req.query.genre : "";
  const books = await getBooksByGenreFromDb(genre);
  res.status(200).json(books);
};
