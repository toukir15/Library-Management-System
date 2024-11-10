import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BookServices } from "./book.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookServices.createBookIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Create book successfully!",
      data: result,
    });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
    const result = await BookServices.getAllBookFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Retrive books successfully!",
      data: result,
    });
});

const getBook = catchAsync(async (req: Request, res: Response) => {
    const bookId = req.params.updateBookIntoDB
    const result = await BookServices.getBookFromDB(bookId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Retrive book successfully!",
      data: result,
    });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
    const bookId = req.params.updateBookIntoDB
    const result = await BookServices.updateBookIntoDB(bookId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update book successfully!",
      data: result,
    });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const bookId = req.params.updateBookIntoDB
    const result = await BookServices.deleteBookFromDB(bookId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Delete book successfully!",
      data: result,
    });
});

export const BookControllers = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
};
