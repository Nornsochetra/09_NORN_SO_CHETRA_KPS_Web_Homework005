import React from "react";
import BookCategoriesCard from "./component/BookCategoriesCard";
import {
  getAllBookCategoryService,
  getAllBookService,
} from "@/service/book-service";

const BookCategoriesPage = async () => {
  const dataBookCategory = await getAllBookCategoryService();
  const dataBookCategorys = dataBookCategory.payload;

  const dataAllBook = await getAllBookService();
  const dataAllBooks = dataAllBook.payload;
  return (
    <main>
      <section className="flex items-center">
        <article className=" min-h-screen w-full mx-14 mt-5 bg-white rounded-t-[50px]">
          <article className="flex justify-between">
            <div className="mx-14 mt-11 bg-[#F5F7F8] p-3 w-32 text-center rounded-xl">
              <p className="font-bold" style={{ color: "var(--color-cyan)" }}>
                All Book
              </p>
            </div>
            <div className="mx-14 mt-11">
              <select
                id="category-select"
                className="p-2 box-border bg-[#f5f7f8] rounded-md w-64 outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-400"
              >
                <option>Select a Category</option>
                {dataBookCategorys.length > 0 ? (
                  dataBookCategorys.map((option, index) => (
                    <option key={index} value="fiction">
                      {option.book_cate_name}
                    </option>
                  ))
                ) : (
                  <p className="text-center p-4 text-gray-500">
                    No books available.
                  </p>
                )}
              </select>
            </div>
          </article>
          <div
            className="border-b mx-14 mt-2"
            style={{ borderColor: "var(--color-aqua)" }}
          ></div>
          <BookCategoriesCard bookCards={dataAllBooks} />
        </article>
      </section>
    </main>
  );
};

export default BookCategoriesPage;
