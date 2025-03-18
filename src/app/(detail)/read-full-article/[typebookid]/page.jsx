import { getBookById } from "@/service/book-service";
import Image from "next/image";
import React from "react";

const GetTypeBookById = async ({ params }) => {
  const typeid = params.typebookid;
  const bookData = await getBookById(typeid);
  const data = bookData.payload;
  console.log("data", data);
  // pobject

  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <title>tom</title>
        <meta name="description" content="Tom & Jerry Cartoon Information" />
        <link rel="icon" href="/favicon.ico" />
      </div>

      {/* Navigation Bar */}
      <nav className="p-4 flex items-center space-x-4">
        <div className="text-blue-500 flex items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7m-9 2v6h4v-6m-6 0h-4v6h4v-6z"
            />
          </svg>
          <a href="#" className="hover:underline">
            Home
          </a>
        </div>
        <div className="text-gray-500">&gt;</div>
        <div className="text-blue-500 hover:underline">Old School Cartoons</div>
        <div className="text-gray-500">&gt;</div>
        <div className="text-red-500 hover:underline">Tom & Jerry</div>
      </nav>

      {/* Main Content */}
      <main className="max-w-full mx-30 min-h-full bg-white p-6 rounded-t-4xl shadow-md mt-40 flex flex-col md:flex-row relative">
        {/* Text Section */}
        <div className="max-w-full md: p-4 mt-40 ml-10">
          <h1 className="text-3xl font-bold text-[#0B3954]">
            {data.book_title}
          </h1>
          <h2 className="text-lg text-gray-600 mt-2">
            by{" "}
            <span className="text-[#087E8B] font-semibold">
              {data.book_author}
            </span>
          </h2>
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
          <p className="mt-3 text-gray-600 leading-relaxed w-full">
            {data.description}
          </p>
        </div>

        {/* Image Section */}
        <div className="h-[200px] md:w-1/3 p-4 flex justify-center absolute top-[-120px] left-[870px]">
          <div className="ml-14 w-56 h-72">
            <img
              src="https://i.pinimg.com/736x/4b/94/ff/4b94ff941e7263e7f67e01b77c7cfe41.jpg"
              alt="Tom and Jerry Picnic"
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
