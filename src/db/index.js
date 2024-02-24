import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";
const DB_NAME = "bookStore";
const connectDB = async function () {
  console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
  try {
    const connectMongoDb = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongo DB connected Successfully at : ${connectMongoDb.connection.host}`
    );
    return new ApiResponse(200, {
      message: `Connected to Mongo Db on ${connectMongoDb.connection.host}`,
    });
  } catch (error) {
    console.log(`Mongo Db Connection Error Log : ${error}`);
    throw new ApiError(400, `Mongo Db Connection Error : ${error}`);
  }
};

export default connectDB;
