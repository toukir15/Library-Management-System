import { NextFunction, Request, Response } from "express";

const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const getBook = async (req: Request, res: Response, next: NextFunction) => {};

const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const BookControllers = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
};
