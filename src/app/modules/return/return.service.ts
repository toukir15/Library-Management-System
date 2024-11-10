import prisma from "../../../shared/prisma";

const returnBook = async (payload: {borrowId: string}) => {
 await prisma.borrowRecord.delete({
    where: payload
 })
};

export const ReturnServices = {
    returnBook
}