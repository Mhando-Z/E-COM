import React from "react";
import { Link } from "react-router-dom";

function Product({ data }) {
  return (
    <div>
      <div className="flex max-w-sm flex-col items-center justify-center lg:hover:scale-105 duration-700">
        <div className="mt-5 flex flex-col p-5 gap-5 rounded-xl items-center bg-gray-300 shadow-xl">
          <Link to={`/Productspage/:${data.id}`}>
            <img
              src={data.image.url}
              alt="poster"
              className="max-w-screen bg-gray-200 rounded-xl h-auto shadow-md"
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
