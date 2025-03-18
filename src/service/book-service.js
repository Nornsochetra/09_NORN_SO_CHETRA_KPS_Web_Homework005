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
