import React from "react";
import { Link } from "react-router-dom";

function Product({ data }) {
  //scroll top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col dark:bg-gray-600 dark:text-gray-200 gap-5 rounded-xl items-center bg-gray-300 shadow-2xl">
          <Link onClick={scrollToTop} to={`/Productspage/${data.id}`}>
            <div
              className="xl:size-64 rounded-b-xl lg:size-60 md:size-48 sm:size-56 xs:size-44 size-72 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url("${data.image.url}")` }}
            ></div>
            {/* <img
              src={data.image.url}
              alt="poster"
              className="max-w-screen dark:bg-gray-300 bg-gray-200 rounded-xl h-auto shadow-md"
            /> */}
            <div className="flex bg-slate-400 bg-opacity-25 dark:bg-slate-800 dark:bg-opacity-20 flex-col p-5 items-center h-28 justify-center gap-1">
              <h1 className="md:text-xl text-lg text-center font-sans font-semibold">
                {data.name}
              </h1>
              <h1 className="md:text-lg text-center font-sans ">
                {data.price.formatted_with_symbol}
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
