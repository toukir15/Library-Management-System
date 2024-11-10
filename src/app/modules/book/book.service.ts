import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBookIntoDB = async (payload: Book) => {
    const result = await prisma.book.create({
        data: payload
    })
    return result   
};

const getAllBookFromDB = async () => {
    const result = await prisma.book.findMany() 
    return result
};

const getBookFromDB = async (id: string) => {
    const result = await prisma.book.findUniqueOrThrow({
        where: { bookId: id }
    });
    return result;
};


const updateBookIntoDB = async (id: string, payload: Partial<Book>) => {
    const result = await prisma.book.update({
        where: { bookId: id },
        data: payload
    });
    return result;
};

const deleteBookFromDB = async (id: string) => {
   const result = await prisma.book.delete({
    where: {bookId: id}
})
return result
};

export const BookServices = {
  createBookIntoDB,
  getAllBookFromDB,
  getBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
