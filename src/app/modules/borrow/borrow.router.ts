import express from 'express';
import { BorrowControllers } from './borrow.controller';

const router = express.Router();

router.post("/", BorrowControllers.borrowBook);
router.get("/overdue", BorrowControllers.getOverdueBorrowedBooks);

export const BorrowRoutes = router;