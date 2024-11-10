import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { MemberServices } from "./member.sevice";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const ceateMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberServices.creteMemberIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create member successfully!",
    data: result,
  });
});

const getAllMembersFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MemberServices.getAllMembersFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Retrive members successfully!",
      data: result,
    });
  }
);

const getMember = catchAsync(async (req: Request, res: Response) => {
  const memberId = req.params.memberId;
  const result = await MemberServices.getMemberFromDB(memberId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Retrive member successfully!",
      data: result,
    });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const memberId = req.params.memberId;
  const result = await MemberServices.updateMemberIntoDB(memberId, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update member successfully!",
      data: result,
    });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const memberId = req.params.memberId;
  const result = await MemberServices.deleteMemberFromDB(memberId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Delete member successfully!",
      data: result,
    });
});

export const MemberControllers = {
  ceateMember,
  getAllMembersFromDB,
  getMember,
  deleteMember,
  updateMember,
};
