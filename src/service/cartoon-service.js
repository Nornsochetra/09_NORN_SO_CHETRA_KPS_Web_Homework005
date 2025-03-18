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
