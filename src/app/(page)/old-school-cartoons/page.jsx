import React from "react";
import CartoonCardComponentPage from "./component/CartoonCardComponent";
import {
  getAllCartoonCategoryService,
  getAllCartoonService,
  getCartoonByCartoonGenreId,
  searchCartoonByTitle,
} from "@/service/cartoon-service";
import SelectCartoonComponentPage from "./component/SelectComponent";

const OldScoolCartoonPage = async ({ searchParams }) => {
  // get all cartoon data
  const dataRes = await getAllCartoonCategoryService();
  const cartoonCategories = dataRes.payload;

  const searchQuery = searchParams?.search || "";
  const cartoonGenre = searchParams?.query || "";

  let cartoonCards = [];

  if (searchQuery) {
    const searchData = await searchCartoonByTitle(searchQuery);
    const allSearchResults = searchData.payload;

    if (cartoonGenre) {
      cartoonCards = allSearchResults.filter(
        (cartoon) => cartoon.cartoon_category_id === cartoonGenre
      );
    } else {
      cartoonCards = allSearchResults;
    }
  } else if (cartoonGenre) {
    const cartoonCategoryData = await getCartoonByCartoonGenreId(cartoonGenre);
    cartoonCards = cartoonCategoryData.payload;
  } else {
    const allCartoons = await getAllCartoonService();
    cartoonCards = allCartoons.payload;
  }

  return (
    <main>
      <section className="flex items-center">
        <article className=" min-h-screen w-full mx-14 mt-5 bg-white rounded-t-[50px]">
          <article className="flex justify-between">
            <div className="mx-14 mt-11 bg-[#F5F7F8] p-3 w-48 text-center rounded-xl">
              <p className="font-bold" style={{ color: "var(--color-cyan)" }}>
                Old School Cartoons
              </p>
            </div>
            <div className="mx-14 mt-11">
              <SelectCartoonComponentPage selectItem={cartoonCategories} />
            </div>
          </article>
          <div
            className="border-b mx-14 mt-2"
            style={{ borderColor: "var(--color-aqua)" }}
          ></div>
          <CartoonCardComponentPage cartoonCard={cartoonCards} />
        </article>
      </section>
    </main>
  );
};

export default OldScoolCartoonPage;
