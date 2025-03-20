// Get all cartoon data
export const getAllCartoonService = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// get all cartoon category
export const getAllCartoonCategoryService = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon_genre"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// get cartoon data by id
export const getCartoonById = async (cartoonId) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon/${cartoonId}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// search cartoon by title
export const searchCartoonByTitle = async (searchCartoon) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?search=${searchCartoon}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// get cartoon by cartoon genre id
export const getCartoonByCartoonGenreId = async (cartoonGenreId) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?genre=${cartoonGenreId}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
