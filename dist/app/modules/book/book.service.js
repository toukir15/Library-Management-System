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
exports.BookServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data: payload
    });
    return result;
});
const getAllBookFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany();
    return result;
});
const getBookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUniqueOrThrow({
        where: { bookId: id }
    });
    return result;
});
const updateBookIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: { bookId: id },
        data: payload
    });
    return result;
});
const deleteBookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: { bookId: id }
    });
    return result;
});
exports.BookServices = {
    createBookIntoDB,
    getAllBookFromDB,
    getBookFromDB,
    updateBookIntoDB,
    deleteBookFromDB,
};
