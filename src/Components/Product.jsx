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
      <div className="flex max-w-sm flex-col items-center justify-center">
        <div className="flex flex-col p-5  dark:bg-gray-600 dark:text-gray-200 gap-5 rounded-xl items-center bg-gray-300 shadow-xl">
          <Link onClick={scrollToTop} to={`/Productspage/${data.id}`}>
            <img
              src={data.image.url}
              alt="poster"
              className="max-w-screen dark:bg-gray-300 bg-gray-200 rounded-xl h-auto shadow-md"
            />
            <div className="flex flex-col items-center mt-5 justify-center gap-1">
              <h1 className="xl:text-2xl text-xl text-center font-sans font-semibold">
                {data.name}
              </h1>
              <h1 className="xl:text-xl text-lg text-center font-sans ">
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
