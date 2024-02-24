import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, (req, res) => {
      console.log(`Server is Connected at ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log(
        `Error while Connecting to port ${process.env.PORT} : => ${error}`
      );
      throw new Error(error);
    });
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB at ${process.env.PORT}`);
  });
