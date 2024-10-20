import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const getBooksByGenreFromDb = async (
  genre: string
): Promise<IBook[]> => {
  const books = await Book.aggregate([
    {
      $match: { genre },
    },
  ]);
  return books;
};

export const getBooksByGenreAndPublisherFromDb = async (
  genre: string,
  publisher: string
): Promise<IBook[]> => {
  const books = await Book.aggregate([
    {
      $match: { genre, "publisher.name": publisher },
    },
  ]);
  return books;
};
