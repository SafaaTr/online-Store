import React from "react";
import Filters from "./Filters";
import { IoMdClose } from "react-icons/io";

function MobileFilterDrawer({show,close,price,setPrice,rating,setRating,selectedCategories,setSelectedCategories}) {
  return (
    <>
      {show && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={close}
        ></div>
      )}

      <div
        className={`
          fixed left-0 bottom-0 w-full bg-white shadow-2xl rounded-t-2xl p-20 
          transition-all duration-300 z-50 md:hidden
          ${show ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="flex justify-end mb-10">
          <button onClick={close}>
            <IoMdClose size={30} />
          </button>
        </div>

        <Filters
          price={price}
          setPrice={setPrice}
          rating={rating}
          setRating={setRating}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          closeMobileFilter={close}
        />
      </div>
    </>
  );
}

export default MobileFilterDrawer;
