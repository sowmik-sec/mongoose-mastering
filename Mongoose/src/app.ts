import express, { Application, Request, Response } from "express";
import cors from "cors";
import { model, Schema } from "mongoose";
export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  // inserting a test data into mongodb
  /*
  step1: interface
  step2: schema
  step3: model
  step4: database query
  */

  // creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // create schema using interface

  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },

    email: { type: String, required: true, unique: true },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  const createUserToDb = async () => {
    const User = model<IUser>("User", userSchema);
    const user = new User({
      id: "sfash32423479dsf",
      role: "student",
      password: "4234",
      name: {
        firstName: "Ahsan",
        middleName: "Habib",
        lastName: "Sowmik",
      },
      dateOfBirth: "01-01-1800",
      gender: "male",
      email: "ahsan@habib.com",
      contactNo: "4234234234",
      emergencyContactNo: "423423423",
      presentAddress: "Bhurungamari, Kurigram",
      permanentAddress: "Bhurungamari, Kurigram",
    });
    await user.save();
    res.send(user);
  };
  createUserToDb();
});
