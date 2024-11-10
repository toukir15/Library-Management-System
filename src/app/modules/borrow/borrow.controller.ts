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

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowServices.returnBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Return book successfully!",
    data: result,
  });
});

export const BorrowControllers = {
  borrowBook,
  returnBook,
};
