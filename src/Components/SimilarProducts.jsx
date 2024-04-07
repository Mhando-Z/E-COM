import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../Context/ProductsContext";
import Product from "./Product";

function SimilarProducts({ Categories }) {
  const { data } = useContext(ProductsContext);
  const [groupedData, setGroup] = useState([]);

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
          {Categories === "Smartphones" && (
            <div>
              <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                {groupedData.smartphones.map((dt, index) => {
                  return <Product key={index} val={index} data={dt} />;
                })}
              </div>
              <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
                {/* <ReactPaginate
                  className="text-xl flex items-center justify-evenly gap-x-3"
                  pageClassName=" bg-gray-200 px-2"
                  activeClassName="bg-pink-600 text-white"
                  previousClassName=" bg-gray-200 px-2"
                  nextClassName="bg-gray-200 px-2"
                  breakLabel="..."
                  nextLabel="Next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="Prev"
                  renderOnZeroPageCount={null}
                /> */}
              </div>
            </div>
          )}
          {/* SMARTPHONES CATEGORY */}
          {/* LAPTOPS CATEGORY */}
          {Categories === "Laptops" && (
            <div>
              <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                {groupedData.laptops.map((dt, index) => {
                  return <Product key={index} val={index} data={dt} />;
                })}
              </div>
              <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
                {/* <ReactPaginate
                  className="text-xl flex items-center justify-evenly gap-x-3"
                  pageClassName=" bg-gray-200 px-2"
                  activeClassName="bg-pink-600 text-white"
                  previousClassName=" bg-gray-200 px-2"
                  nextClassName="bg-gray-200 px-2"
                  breakLabel="..."
                  nextLabel="Next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="Prev"
                  renderOnZeroPageCount={null}
                /> */}
              </div>
            </div>
          )}
          {/* LAPTOPS CATEGORY */}
          {/* MUSIC DEVICES LOGIC */}
          {Categories === "music" && (
            <div>
              <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                {groupedData.music.map((dt, index) => {
                  return <Product key={index} val={index} data={dt} />;
                })}
              </div>
              <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
                {/* <ReactPaginate
                  className="text-xl flex items-center justify-evenly gap-x-3"
                  pageClassName=" bg-gray-200 px-2"
                  activeClassName="bg-pink-600 text-white"
                  previousClassName=" bg-gray-200 px-2"
                  nextClassName="bg-gray-200 px-2"
                  breakLabel="..."
                  nextLabel="Next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="Prev"
                  renderOnZeroPageCount={null}
                /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SimilarProducts;
