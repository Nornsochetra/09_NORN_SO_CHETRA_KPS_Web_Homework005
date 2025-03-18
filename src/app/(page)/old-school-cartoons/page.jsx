import React from "react";
import CartoonCardComponentPage from "./component/CartoonCardComponent";
import {
  getAllCartoonCategoryService,
  getAllCartoonService,
} from "@/service/cartoon-service";

const OldScoolCartoonPage = async () => {
  const dataRes = await getAllCartoonCategoryService();
  const data = dataRes.payload;

  const dataAllCartoon = await getAllCartoonService();
  const dataAllCartoons = dataAllCartoon.payload;
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
              <select
                id="category-select"
                className="p-2 box-border bg-[#f5f7f8] rounded-md w-64 outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-400"
              >
                <option>Select a Category</option>
                {data.length > 0 ? (
                  data.map((option, index) => (
                    <option key={index} value="fiction">
                      {option.cartoon_genre}
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
          <CartoonCardComponentPage cartoonCard={dataAllCartoons} />
        </article>
      </section>
    </main>
  );
};

export default OldScoolCartoonPage;
