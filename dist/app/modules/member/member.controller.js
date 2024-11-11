"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const member_sevice_1 = require("./member.sevice");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const ceateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_sevice_1.MemberServices.creteMemberIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Create member successfully!",
        data: result,
    });
}));
const getAllMembersFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_sevice_1.MemberServices.getAllMembersFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Retrive members successfully!",
        data: result,
    });
}));
const getMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.memberId;
    const result = yield member_sevice_1.MemberServices.getMemberFromDB(memberId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Retrive member successfully!",
        data: result,
    });
}));
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.memberId;
    const result = yield member_sevice_1.MemberServices.updateMemberIntoDB(memberId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Update member successfully!",
        data: result,
    });
}));
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.memberId;
    const result = yield member_sevice_1.MemberServices.deleteMemberFromDB(memberId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Delete member successfully!",
        data: result,
    });
}));
exports.MemberControllers = {
    ceateMember,
    getAllMembersFromDB,
    getMember,
    deleteMember,
    updateMember,
};
