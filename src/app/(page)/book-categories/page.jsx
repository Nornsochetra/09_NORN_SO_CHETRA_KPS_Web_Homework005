import React from "react";
import BookCategoriesCard from "./component/BookCategoriesCard";
import {
  getAllBookCategoryService,
  getAllBookService,
  getBookByBookCategoryId,
  getBookByCategoryId,
  searchBookByTitle,
} from "@/service/book-service";
import SelectBookComponentPage from "./component/SelectComponentPage";

const BookCategoriesPage = async ({ searchParams }) => {
  // get all book category
  const dataBookCategory = await getAllBookCategoryService();
  const dataBookCategorys = dataBookCategory.payload;

  // search book by title
  const searchQuery = searchParams?.search || "";
  // get book by book category id
  const bookCategory = searchParams?.query || "";

  const selectedCategoryName =
    dataBookCategorys.find(
      (category) => String(category.id) === String(bookCategory)
    )?.book_cate_name || "All Books";

  let bookCards = [];
  if (searchQuery) {
    const searchData = await searchBookByTitle(searchQuery);
    const allSearchResults = searchData.payload;
    if (bookCategory) {
      bookCards = allSearchResults.filter(
        (book) => book.book_cate_id === bookCategory
      );
    } else {
      bookCards = allSearchResults;
    }
  } else if (bookCategory) {
    const bookCategoryData = await getBookByBookCategoryId(bookCategory);
    bookCards = bookCategoryData.payload;
  } else {
    const allBooks = await getAllBookService();
    bookCards = allBooks.payload;
  }

  return (
    <main>
      <section className="flex items-center">
        <article className=" min-h-screen w-full mx-14 mt-5 bg-white rounded-t-[50px]">
          <article className="flex justify-between">
            <div className="mx-14 mt-11 bg-[#F5F7F8] p-3 px-5 w-auto text-center rounded-xl">
              <p className="font-bold" style={{ color: "var(--color-cyan)" }}>
                {selectedCategoryName}
              </p>
            </div>
            <div className="mx-14 mt-11">
              <SelectBookComponentPage selectItem={dataBookCategorys} />
            </div>
          </article>
          <div
            className="border-b mx-14 mt-2"
            style={{ borderColor: "var(--color-aqua)" }}
          ></div>
          <BookCategoriesCard bookCards={bookCards} />
        </article>
      </section>
    </main>
  );
};

export default BookCategoriesPage;
