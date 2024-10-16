import { NextFunction, Request, Response } from "express";
import {
  createUserToDb,
  getAdminUsersFromDb,
  getUserByIdFromDb,
  getUsersFromDb,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDb(data);
  res.status(200).json({ status: "success", data: user });
};

// route -> controller -> service

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDb();
  res.status(200).json({ status: "success", data: users });
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await getUserByIdFromDb(req.params.id);
  res.status(200).json({ status: "success", data: user });
};
export const getAdminUsers = async (req: Request, res: Response) => {
  const user = await getAdminUsersFromDb();
  res.status(200).json({ status: "success", data: user });
};
