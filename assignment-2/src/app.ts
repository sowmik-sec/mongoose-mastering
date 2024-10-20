import express, { Application } from "express";
import cors from "cors";
import bookRouter from "./app/modules/book/book.route";
export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", bookRouter);
