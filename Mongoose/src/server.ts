import mongoose from "mongoose";
import { app } from "./app";
const port: number = 5000;

// middlewares
// app.use(express.json());

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("successfully connected to db");

    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect to db `, err);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch((err) => console.log(err));
