import { getAllBookService } from "@/service/book-service";
import Image from "next/image";
import React from "react";
import { card } from "@heroui/react";
import Link from "next/link";

const BookCategoriesCard = async ({ bookCards }) => {
  return (
    <section className="py-14 px-14  overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-6 max-h-[450px]">
        {bookCards.length > 0 ? (
          bookCards.map((cardData) => (
            <div
              key={cardData.id}
              className="bg-[#f5f7f8] rounded-2xl shadow-lg flex items-center w-[430px] h-[220px] gap-14 mb-10 mt-15"
            >
              <div className="h-[180px] w-[120px] relative">
                <div className="w-[300px] h-[200px] flex-shrink-0 absolute top-[-90px] left-[12px]">
                  {cardData.image && (
                    <img
                      className="rounded-lg"
                      src={cardData.image}
                      alt={cardData.book_title}
                      width={150}
                      height={200}
                      objectfit="cover"
                    />
                  )}
                  <Link
                    href={{
                      pathname: `/read-full-article/${cardData.id}`,
                      query: {
                        type: "book",
                        name: "book-categories",
                        title: cardData.book_title,
                      },
                    }}
                  >
                    <button className=" mt-2.5 ml-2.5 bg-blue-500 text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
                      Read Full Article
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-[235px] h-full text-justify mt-10">
                <h3 className="text-lg font-semibold text-[#0b3954]">
                  {cardData.book_title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm line-clamp-6 mr-2">
                  {cardData.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="flex w-ful justify-center text-[#087e8b] text-xl font-semibold bg-red-300">
            No Old School Cartoon Card Available
          </p>
        )}
      </div>
    </section>
  );
};

export default BookCategoriesCard;
