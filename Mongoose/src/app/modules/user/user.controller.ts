import { NextFunction, Request, Response } from "express";
import { createUserToDb, getUsersFromDb } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  console.log(data);
  const user = await createUserToDb(data);
  res.status(200).json({ status: "success", data: user });
};

// route -> controller -> service

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDb();
  res.status(200).json({ status: "success", data: users });
};
