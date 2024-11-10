const createBookIntoDB = async (payload: any) => {
    console.log("create book")
};

const getAllBookFromDB = async () => {
    console.log("get books")
};

const getBookFromDB = async (id: string) => {
    console.log("get book")
};

const updateBookIntoDB = async (id: string) => {
    console.log("update book")
};

const deleteBookFromDB = async (id: string) => {
    console.log("delete book")
};

export const BookServices = {
  createBookIntoDB,
  getAllBookFromDB,
  getBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
