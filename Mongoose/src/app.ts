import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./app/modules/user/user.route";
export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
