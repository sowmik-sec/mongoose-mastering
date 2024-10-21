import { HydratedDocument, Model } from "mongoose";

export interface IBook {
  title: string;
  author: string[];
  genre: string;
  publication_year: number;
  rating: number;
  price: number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: {
    user: string;
    comment: string;
  }[];
}

export interface BookModel extends Model<IBook> {
  getPopularBooks(): Promise<HydratedDocument<IBook>>;
}
