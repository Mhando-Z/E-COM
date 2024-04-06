import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Productspage({ data }) {
  const { id } = useParams();
  const dataz = data.find((dt) => dt.id === parseInt(id));
  if (!data || data.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-y-5 gap-x-14 items-center justify-between p-10 bg-gray-300 shadow-xl rounded-xl">
        <img
          src={dataz.image.url}
          alt="phone"
          className="w-[556px] h-[470px] bg-gray-200 shadow-md rounded-xl"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="mb-5">
            <h1 className="lg:text-6xl max-w-lg text-4xl mb-5 text-center">
              {dataz.name}
            </h1>
            <h1 className="text-xl max-w-lg text-center">
              {dataz.description}
            </h1>
          </div>

          <div className="flex flex-col mt-5">
            <h1 className="md:text-2xl text-xl font-semibold text-left">
              Price: {dataz.price} Tsh
            </h1>
            <div className="lg:flex hidden flex-col mt-3 lg:mt-10 lg:flex-row gap-x-24 gap-y-5 items-center justify-center">
              <Link
                className="md:text-xl py-2 font-semibold px-10 bg-pink-600 text-white text-center"
                to={`/Paypage/${dataz.id}`}
              >
                Buy
              </Link>
              <Link
                className="md:text-xl py-2 px-10 font-semibold bg-pink-600 text-white text-center"
                to={`/Cartpage/${dataz.id}`}
              >
                <ShoppingCartIcon sx={{ fontSize: "1.4rem", mr: "7px" }} />
                Add Cart
              </Link>
            </div>
            {/* Small screen buttons */}
            <div className="lg:hidden flex flex-col mt-3 gap-y-5 items-center justify-center">
              <Link
                className="text-md w-full py-2 font-semibold px-10 bg-pink-600 text-white text-center"
                to={`/Paypage/${dataz.id}`}
              >
                Buy
              </Link>
              <Link
                className="text-md w-full py-2 items-center font-semibold px-10 bg-pink-600 text-white text-center"
                to={`/Cartpage/${dataz.id}`}
              >
                <ShoppingCartIcon sx={{ fontSize: "1.2rem", mr: "7px" }} />
                Add Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productspage;
