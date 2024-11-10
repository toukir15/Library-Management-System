import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ReturnServices } from "./return.service";

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const result = await ReturnServices.returnBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Return book successfully!",
    data: result,
  });
});

export const ReturnControllers = {
  returnBook,
};
