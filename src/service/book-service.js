// Get all Book
export const getAllBookService = async () => {
  try {
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get all data Category
export const getAllBookCategoryService = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/book_category"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get book by id
export const getBookById = async (proid) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book/${proid}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Search book by title
export const searchBookByTitle = async (seachParams) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?search=${seachParams}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// get book by book category id
export const getBookByBookCategoryId = async (categoryId) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?query=${categoryId}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
