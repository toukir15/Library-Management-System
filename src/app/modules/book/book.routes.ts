import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);

router.get("/", BookControllers.getAllBooks);

router.get("/:id", BookControllers.getBook);

router.put("/:id", BookControllers.updateBook);

router.delete("/:id", BookControllers.deleteBook);

export const BookRoutes = router;
