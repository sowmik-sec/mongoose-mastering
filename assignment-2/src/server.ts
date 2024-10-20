import mongoose from "mongoose";
import { app } from "./app";
const port: number = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/assignment_2");
    console.log("successfully connected to db");
    app.listen(port, () => {
      console.log(`server is listening at port ${port}`);
    });
  } catch (err) {
    console.log(`Something went wrong `, err);
  }
}

main().catch((err) => console.log(err));
