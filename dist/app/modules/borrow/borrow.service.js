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
exports.BorrowServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.create({
        data: payload
    });
    return result;
});
const getOverdueBorrowedBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const fourteenDaysAgo = new Date(today);
    fourteenDaysAgo.setDate(today.getDate() - 14);
    const result = yield prisma_1.default.borrowRecord.findMany({
        where: {
            borrowDate: {
                lt: fourteenDaysAgo,
            },
            returnDate: null,
        },
    });
    return result;
});
exports.BorrowServices = {
    borrowBook,
    getOverdueBorrowedBooksFromDB
};
