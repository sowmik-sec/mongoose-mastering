import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};

export const getUsersFromDb = async () => {
  const users = await User.find();
  return users;
};
