import Link from "next/link";
import React from "react";
import { sideBarData } from "@/data/SideBarData";
import Image from "next/image";
import profile from "../image/profile.png";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const SideBarComponentPage = () => {
  return (
    <>
      {/* Mobile Menu Toggle */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label
        htmlFor="menu-toggle"
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-md p-2 rounded-full cursor-pointer"
      >
        <FiMenu size={24} className="peer-checked:hidden" />
        <IoMdClose size={24} className="hidden peer-checked:block" />
      </label>

      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 min-h-full w-[300px] bg-white shadow-lg p-5 flex flex-col items-center 
        -translate-x-full peer-checked:translate-x-0 md:translate-x-0 transition-transform duration-300 ease-in-out"
      >
        {/* User Profile */}
        <div className="flex flex-col items-center mb-5">
          <Link href="#">
            <Image
              src={profile}
              alt="Black Monster's profile"
              width={130}
              height={130}
              className="object-cover rounded-full mb-2"
            />
          </Link>
          <div>
            <h2 className="text-xl text-center">Black Monster</h2>
            <h3 style={{ color: "var(--color-cyan)" }} className="text-lg">
              blackmonster@gmail.com
            </h3>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="w-full flex-grow">
          <ul className="ml-5">
            {sideBarData.map((item, index) => {
              const isSpecialLink = [
                "Home",
                "Book Categories",
                "Old School Cartoons",
              ].includes(item.label);
              return (
                <Link
                  key={index}
                  className={`flex items-center rounded-md h-12 px-4 text-black cursor-pointer ${
                    isSpecialLink
                      ? "hover:bg-[#f5f7f8] hover:text-black hover:font-medium"
                      : "hover:bg-[#f5f7f8]"
                  }`}
                  href={item.path}
                >
                  <span className="mr-3">
                    {item.icon && (
                      <item.icon size={20} color="var(--color-red)" />
                    )}
                  </span>
                  <span className="text-base tracking-wide truncate capitalize">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBarComponentPage;
