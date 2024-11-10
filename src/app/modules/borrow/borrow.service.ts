import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";

const borrowBook = async (payload: BorrowRecord) => {
 const result = await prisma.borrowRecord.create({
    data: payload
 })
 return result
};

const getOverdueBorrowedBooksFromDB = async () => {

  const today = new Date();
  const fourteenDaysAgo = new Date(today);
  fourteenDaysAgo.setDate(today.getDate() - 14);

    const result = await prisma.borrowRecord.findMany({
      where: {
        borrowDate: {
          lt: fourteenDaysAgo,
        },
        returnDate: null,
      },
    });
    
    return result
};

export const BorrowServices = {
    borrowBook,
    getOverdueBorrowedBooksFromDB
}