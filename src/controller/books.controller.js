import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Book } from "../model/books.model.js";

const getAllBooks = asyncHandler(async (req, res) => {
  try {
    const { page } = req.body;
    let getBooks;
    if (!page) {
      getBooks = await Book.find().limit(50);
    } else {
      // let lastIndex = page * 10;
      // let firstIndex = lastIndex - 10;
      let skipPages = (page - 1) * 10;
      getBooks = await Book.find().skip(skipPages).limit(10);
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, getBooks, "Books query returned successfully")
      );
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Could not fetch Books from the server"));
  }
});

export { getAllBooks };
