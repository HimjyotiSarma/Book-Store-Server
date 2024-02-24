import { Router } from "express";
import { getAllBooks } from "../controller/books.controller.js";

const router = Router();
router.route("/collection").get(getAllBooks);

export default router;
