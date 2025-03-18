import { getAllCartoonService } from "@/service/cartoon-service";
import React from "react";
import { Eye } from "lucide-react";

const CartoonCardComponentPage = async ({ cartoonCard }) => {
  return (
    <main>
      <section className="flex flex-row flex-wrap px-14 gap-14 py-12 overflow-y-auto max-h-[500px]">
        {cartoonCard.length > 0 ? (
          cartoonCard.map((cartoon, index) => (
            <div key={index} className="w-1/3.5 flex-shrink-0">
              <img
                src={cartoon.image}
                alt={cartoon.ct_title}
                className="rounded-3xl object-cover w-[280px] h-[350px]"
              />
              <div className="mt-3 text-[#0B3954] font-semibold text-lg">
                <p>{cartoon.ct_title}</p>
              </div>
              <div className="text-[#087E8B] font-semibold flex items-center">
                <Eye size={20} className="mr-3" />
                <p className="text-center">{cartoon.view_count} times</p>
                <span className="mx-2">|</span>
                <p className="">{cartoon.published_year.slice(0, 4)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No Old School Cartoon Card Available</p>
        )}
      </section>
    </main>
  );
};

export default CartoonCardComponentPage;
