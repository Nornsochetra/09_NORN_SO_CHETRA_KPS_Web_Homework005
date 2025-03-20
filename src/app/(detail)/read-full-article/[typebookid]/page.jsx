import { getBookById } from "@/service/book-service";
import Image from "next/image";
import React from "react";
import { Home } from "lucide-react";
import { Book } from "lucide-react";
import { getCartoonById } from "@/service/cartoon-service";
import Link from "next/link";

const GetTypeBookById = async ({ params, searchParams }) => {
  const { typebookid } = params;
  const type = searchParams?.type;
  console.log("type is ", type);

  let data = null;

  if (type === "book") {
    const bookData = await getBookById(typebookid);
    data = bookData.payload;
  } else if (type === "cartoon") {
    const cartoonData = await getCartoonById(typebookid);
    data = cartoonData.payload;
  }

  console.log("data type : ", data);

  return (
    <div className="min-h-screen bg-[#f5f7f8]">
      {/* Navigation Bar */}
      <nav className="p-4 flex items-center gap-5 ml-30 mt-5 relative">
        <div className="text-[#0B3954] text-lg font-semibold flex items-center space-x-3 absolute top-[40px]">
          <Home size={20} />
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <div className="text-[#0B3954]">&gt;</div>
          <Book size={20} />
          <div className="text-[#0B3954] hover:underline">
            <Link
              href={
                type === "book" ? "/book-categories" : "/old-school-cartoons"
              }
              className="hover:underline"
            >
              {type === "book" ? "Book Categories" : "Old School Cartoons"}
            </Link>
          </div>
          <div className="text-[#0B3954]">&gt;</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 16.74V4.67c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15C9.44 3.9 6.26 2.84 4.16 2.67 2.97 2.57 2 3.47 2 4.66v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98ZM12 5.49v15M7.75 8.49H5.5M8.5 11.49h-3"
              stroke="#C81D25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div className="text-red-500 hover:underline">
            {type === "book" ? data.book_title : data.ct_title}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-full mx-30 min-h-full bg-white p-6 rounded-t-4xl shadow-md mt-40 flex flex-col md:flex-row relative">
        {/* Text Section */}
        <div className="max-w-full md: p-4 mt-30 mx-6">
          <h1 className="text-3xl font-bold text-[#0B3954]">
            {data.book_title || data.ct_title}
          </h1>
          {type && (
            <h2 className="text-lg text-gray-600 mt-2">
              <span className="text-[#0B3954]">by </span>
              <span className="text-[#087E8B] font-semibold">
                {data.book_author || data.ct_creator}
              </span>
            </h2>
          )}
          <div className="flex items-center mt-4 space-x-2 text-gray-500">
            {/* <svg
              className="w-5 h-5 text-teal-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>1200000 times</span>
            <span>|</span>
            <span>1940</span> */}
          </div>
          <p className="text-[#0B3954] text-justify text-base leading-relaxed w-full">
            {data.description || data.ct_description}
          </p>
        </div>

        {/* Image Section */}
        <div className="h-[200px] md:w-1/3 p-4 flex justify-center absolute top-[-150px] left-[870px]">
          <div className="ml-14 w-56 h-72">
            <img
              src={data.image}
              alt={data.book_title || data.ct_title}
              layout="fill"
              objectfit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetTypeBookById;
