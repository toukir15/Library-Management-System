import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);

router.get("/", BookControllers.getAllBooks);

router.get("/:bookId", BookControllers.getBook);

router.put("/:bookId", BookControllers.updateBook);

router.delete("/:bookId", BookControllers.deleteBook);

export const BookRoutes = router;
