import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../Context/ProductsContext";
import Product from "./Product";

function SimilarProducts({ Categories }) {
  const { data } = useContext(ProductsContext);
  const [groupedData, setGroup] = useState([]);
  const [visibleItems, setVisible] = useState(5);

  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 5);
  };
  const loadLess = () => {
    setVisible((prevVisible) => prevVisible - 5);
  };

  ///DATA CATEGORIZING
  function groupProductsByCategory(products) {
    const groupedProducts = {};
    // Iterate over each product
    products.forEach((product) => {
      // Get the categories of the product
      const categories = product.categories;
      // Iterate over each category of the product
      categories.forEach((category) => {
        // Check if the category exists in groupedProducts
        if (!groupedProducts.hasOwnProperty(category.slug)) {
          // If the category doesn't exist, create an array for it
          groupedProducts[category.slug] = [];
        }
        // Push the product into the array for its category
        groupedProducts[category.slug].push(product);
      });
    });
    setGroup(groupedProducts);
  }
  // Group the products by category
  useEffect(() => {
    groupProductsByCategory(data);
  }, [data, Categories]);
  if (!groupedData || groupedData.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mt-14">
      <div className="container mx-auto bg-gray-300 p-5 shadow-lg">
        <h1 className="text-2xl font-semibold text-center md:text-left md:text-3xl">
          Similar Products
        </h1>
      </div>
      <div className="flex flex-col ">
        {/* PRODUCT CATEGORIZATIONS */}
        <div className="container mx-auto mt-5">
          {/* SMARTPHONES CATEGORIZATIONS */}
          {Categories === "Laptops" && (
            <div>
              <div className="grid sm:grid-cols-3 xs:grid-cols-2 [150px]:grid-cols-1 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                {groupedData.laptops.slice(0, visibleItems).map((dt, index) => {
                  return <Product key={index} val={index} data={dt} />;
                })}
              </div>
              <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
                {visibleItems < groupedData.laptops.length ? (
                  <button
                    className="text-xl py-1 px-10 bg-pink-500 text-white font-semibold rounded-lg"
                    onClick={loadMore}
                  >
                    Load More
                  </button>
                ) : (
                  <button
                    className="text-xl py-1 px-10 bg-pink-500 text-white font-semibold rounded-lg"
                    onClick={loadLess}
                  >
                    Load Less
                  </button>
                )}
              </div>
            </div>
          )}
          {/* SMARTPHONES CATEGORY */}
          {/* LAPTOPS CATEGORY */}
          {Categories === "Smartphones" && (
            <div>
              <div className="grid sm:grid-cols-3 xs:grid-cols-2 [150px]:grid-cols-1 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                {groupedData.smartphones
                  .slice(0, visibleItems)
                  .map((dt, index) => {
                    return <Product key={index} val={index} data={dt} />;
                  })}
              </div>
              <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
                {visibleItems < groupedData.smartphones.length ? (
                  <button
                    className="text-xl py-1 px-10 bg-pink-500 text-white font-semibold rounded-lg"
                    onClick={loadMore}
                  >
                    Load More
                  </button>
                ) : (
                  <button
                    className="text-xl py-1 px-10 bg-pink-500 text-white font-semibold rounded-lg"
                    onClick={loadLess}
                  >
                    Load Less
                  </button>
                )}
              </div>
            </div>
          )}
          {/* LAPTOPS CATEGORY */}
          {/* MUSIC DEVICES LOGIC */}
          {Categories === "music" && (
            <div>
              <div className="grid sm:grid-cols-3 xs:grid-cols-2 [150px]:grid-cols-1 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                {groupedData.music.slice(0, visibleItems).map((dt, index) => {
                  return <Product key={index} val={index} data={dt} />;
                })}
              </div>
              <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
                {visibleItems < groupedData.music.length ? (
                  <button
                    className="text-xl py-1 px-10 bg-pink-500 text-white font-semibold rounded-lg"
                    onClick={loadMore}
                  >
                    Load More
                  </button>
                ) : (
                  <button
                    className="text-xl py-1 px-10 bg-pink-500 text-white font-semibold rounded-lg"
                    onClick={loadLess}
                  >
                    Load Less
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SimilarProducts;
