import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BorrowServices } from "./borrow.service";

const borrowBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowServices.borrowBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Borrow book successfully!",
    data: result,
  });
});

const getOverdueBorrowedBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowServices.getOverdueBorrowedBooksFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrive overdue borrowed books successfully!",
    data: result,
  });
});

export const BorrowControllers = {
  borrowBook,
  getOverdueBorrowedBooks
};
