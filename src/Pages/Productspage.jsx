import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductsContext from "../Context/ProductsContext";
import CartContext from "../Context/CartsContext";
import SimilarProducts from "../Components/SimilarProducts";

function Productspage() {
  const { data } = useContext(ProductsContext);
  const { handleAddtoCart } = useContext(CartContext);
  const [showContent, setContent] = useState(false);
  const [showContent1, setContent1] = useState(true);

  const handleContentView = () => {
    setContent(!showContent);
    setContent1(!showContent1);
  };

  const { id } = useParams();
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  //scroll top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const dataz = data.find((dt) => dt.id === id);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-14 items-center justify-between p-10 bg-gray-300 shadow-xl rounded-xl">
          <div className="flex flex-col items-center justify-center">
            {showContent1 && (
              <div className="flex flex-col items-center justify-center gap-y-4">
                <img
                  src={dataz.image.url}
                  alt="phone"
                  className="max-w-screen h-auto bg-gray-200 shadow-md rounded-xl"
                />

                <Link
                  onClick={handleContentView}
                  className="py-2 px-8 bg-pink-500 text-white font-semibold rounded-md"
                >
                  3D model
                </Link>
              </div>
            )}
            {showContent && (
              <div className="flex flex-col items-center justify-center gap-y-4">
                <iframe
                  title={dataz.name}
                  width="500"
                  height="500"
                  src={`https://embed.studio.binkies3d.com/live3d/${dataz.sku}`}
                  frameborder="0"
                  allowfullscreen
                  className="sm:hidden size-80 shadow-lg rounded-xl"
                ></iframe>
                <iframe
                  title={dataz.name}
                  width="500"
                  height="500"
                  src={`https://embed.studio.binkies3d.com/live3d/${dataz.sku}`}
                  frameborder="0"
                  allowfullscreen
                  className="hidden sm:flex shadow-lg rounded-xl"
                ></iframe>
                <Link
                  onClick={handleContentView}
                  className="py-2 px-8 bg-pink-500 text-white font-semibold rounded-md"
                >
                  Picture
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="mb-5">
              <h1 className="lg:text-6xl max-w-lg text-4xl mb-5 text-center">
                {dataz.name}
              </h1>
              <h1 className="text-xl max-w-lg text-justify">
                {dataz.description.replace(/<\/?[^>]+(>|$)/g, "")}
              </h1>
            </div>

            <div className="flex flex-col mt-5">
              <h1 className="md:text-2xl text-xl font-semibold text-left md:text-center">
                Price: {dataz.price.formatted_with_symbol}
              </h1>
              <div className="lg:flex hidden flex-col mt-3 lg:mt-10 lg:flex-row gap-x-24 gap-y-5 items-center justify-center">
                <Link
                  onClick={scrollToTop}
                  className="md:text-xl py-2 font-semibold px-10 bg-pink-600 text-white text-center"
                  to={`/Paypage/${dataz.id}`}
                >
                  Buy
                </Link>
                <button
                  onClick={() => handleAddtoCart(dataz.id, 1)}
                  className="md:text-xl py-2 px-10 font-semibold bg-pink-600 text-white text-center"
                >
                  <ShoppingCartIcon sx={{ fontSize: "1.4rem", mr: "7px" }} />
                  Add Cart
                </button>
              </div>
              {/* Small screen buttons */}
              <div className="lg:hidden flex flex-col mt-3 gap-y-5 items-center justify-center">
                <Link
                  onClick={scrollToTop}
                  className="text-md w-full py-2 font-semibold px-10 bg-pink-500 text-white text-center"
                  to={`/Paypage/${dataz.id}`}
                >
                  Buy
                </Link>
                <button
                  onClick={() => handleAddtoCart(dataz.id, 1)}
                  className="text-md w-full py-2 items-center font-semibold px-10 bg-pink-500 text-white text-center"
                >
                  <ShoppingCartIcon sx={{ fontSize: "1.2rem", mr: "7px" }} />
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts Categories={dataz.categories[0].name} />
    </div>
  );
}

export default Productspage;
