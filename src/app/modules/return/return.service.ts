import prisma from "../../../shared/prisma";

const returnBook = async (payload: {borrowId: string}) => {
 await prisma.borrowRecord.update({
    where: payload,
    data: {returnDate: new Date().toISOString()}
 })
};

export const ReturnServices = {
    returnBook
}