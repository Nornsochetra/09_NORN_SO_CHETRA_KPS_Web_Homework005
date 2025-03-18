import { getAllBookService } from "@/service/book-service";
import Image from "next/image";
import React from "react";
import { cartoon } from "../component/cartoon.png";
import { card } from "@heroui/react";
import Link from "next/link";

const BookCategoriesCard = async ({ bookCards }) => {
  console.log("book card is: ", bookCards);

  return (
    <section className="py-14 px-14  overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-6 max-h-[450px]">
        {bookCards.length > 0 ? (
          bookCards.map((cardData, index) => (
            <div
              key={index}
              className="bg-[#f5f7f8] rounded-2xl shadow-lg flex items-center w-[420px]"
            >
              <div className="w-1/3 flex-shrink-0">
                {cardData.image && (
                  <img
                    className="rounded-lg"
                    src={cardData.image}
                    alt={cardData.book_title}
                    width={120}
                    height={180}
                    objectfit="cover"
                  />
                )}
              </div>
              <div className="w-2/3">
                <h3 className="text-lg font-semibold text-[#0b3954]">
                  {cardData.book_title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm line-clamp-3 mr-2">
                  {cardData.description}
                </p>
                <Link href={`/read-full-article/${cardData.id}`}>
                  <button className="mt-4 bg-blue-500 text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
                    Read Full Article
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center p-4 text-gray-500">No books available.</p>
        )}
      </div>
    </section>
  );
};

export default BookCategoriesCard;
