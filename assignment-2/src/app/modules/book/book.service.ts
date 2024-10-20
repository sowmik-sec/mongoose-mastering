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
