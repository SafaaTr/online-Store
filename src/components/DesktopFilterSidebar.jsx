import React from "react";
import Filters from "./Filters";

function DesktopFilterSidebar({price,setPrice,rating,setRating,  selectedCategories,setSelectedCategories
}) {
  return (
    <div className="hidden md:block sticky top-110">
      <Filters
        price={price}
        setPrice={setPrice}
        rating={rating}
        setRating={setRating}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
}

export default DesktopFilterSidebar;
