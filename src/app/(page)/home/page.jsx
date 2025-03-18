import CardComponentPage from "@/component/CardComponent";
import React from "react";

const HomePageComponent = () => {
  return (
    <main>
      <section className="flex items-center">
        <article className="min-h-screen w-full mx-14 mt-5 bg-white rounded-t-[50px]">
          <div className="mx-14 mt-11 bg-[#F5F7F8] p-3 w-32 text-center rounded-xl">
            <p className="font-bold" style={{ color: "var(--color-cyan)" }}>
              Homepage
            </p>
          </div>
          <div
            className="border-b mx-14 mt-2"
            style={{ borderColor: "var(--color-aqua)" }}
          ></div>
          <CardComponentPage />
        </article>
      </section>
    </main>
  );
};
export default HomePageComponent;
