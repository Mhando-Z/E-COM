import React, { useContext, useEffect, useState } from "react";
import Product from "./../Components/Product";
import ReactPaginate from "react-paginate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import ProductsContext from "../Context/ProductsContext";

function Homepage() {
  const { data } = useContext(ProductsContext);
  const [itemOffset, setItemOffset] = useState(0);
  const [value, setVal] = useState(0);
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [groupedData, setGroup] = useState([]);
  const [category, setCategory] = useState(" ");

  const handlePage = (val, category) => {
    console.log(val);
    setCategory(category);
    setVal(val);
    setShowContent1(!showContent1);
    setShowContent2(!showContent2);
  };

  let itemsPerPage = 15;

  //PAGINATION LOGIC
  const endOffset = itemOffset + itemsPerPage;
  const datax = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
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
  }, [data]);

  return (
    <div>
      {showContent1 && (
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-5 items-center justify-center">
            {datax.map((dt, index) => {
              return (
                <Product
                  key={index}
                  onPageinfo={handlePage}
                  val={index}
                  data={dt}
                />
              );
            })}
          </div>
          <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
            <ReactPaginate
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
            />
          </div>
        </div>
      )}
      {showContent2 && (
        <div className="flex flex-col ">
          <div className="container lg:flex hidden sticky top-24  mb-10 mx-auto justify-between">
            <Link
              onClick={handlePage}
              className="text-gray-800 font-semibold bg-gray-300 shadow-xl py-2 px-8 text-2xl "
            >
              Back
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col lg:flex-row gap-y-5 gap-x-14 items-center justify-between p-10 bg-gray-300 shadow-xl rounded-xl">
              <img
                src={data[value].image.url}
                alt="phone"
                className="max-w-screen h-auto bg-gray-200 shadow-md rounded-xl"
              />
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="mb-5">
                  <h1 className="lg:text-6xl max-w-lg text-4xl mb-5 text-center">
                    {data[value].name}
                  </h1>
                  <h1 className="text-xl max-w-lg text-justify">
                    {data[value].description}
                  </h1>
                </div>

                <div className="flex flex-col mt-5">
                  <h1 className="md:text-2xl text-xl font-semibold text-left md:text-center">
                    Price: {data[value].price.formatted_with_symbol}
                  </h1>
                  <div className="lg:flex hidden flex-col mt-3 lg:mt-10 lg:flex-row gap-x-24 gap-y-5 items-center justify-center">
                    <Link
                      className="md:text-xl py-2 font-semibold px-10 bg-pink-600 text-white text-center"
                      to={`/Paypage/${data[value].id}`}
                    >
                      Buy
                    </Link>
                    <button className="md:text-xl py-2 px-10 font-semibold bg-pink-600 text-white text-center">
                      <ShoppingCartIcon
                        sx={{ fontSize: "1.4rem", mr: "7px" }}
                      />
                      Add Cart
                    </button>
                  </div>
                  {/* Small screen buttons */}
                  <div className="lg:hidden flex flex-col mt-3 gap-y-5 items-center justify-center">
                    <Link
                      className="text-md w-full py-2 font-semibold px-10 bg-pink-600 text-white text-center"
                      to={`/Paypage/${data.id}`}
                    >
                      Buy
                    </Link>
                    <button className="text-md w-full py-2 items-center font-semibold px-10 bg-pink-600 text-white text-center">
                      <ShoppingCartIcon
                        sx={{ fontSize: "1.2rem", mr: "7px" }}
                      />
                      Add Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PRODUCT CATEGORIZATIONS */}
          <div className="container mx-auto mt-24">
            <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left mb-14">
              Similar Products
            </h1>
            {/* SMARTPHONES CATEGORIZATIONS */}
            {category === "Smartphones" && (
              <div>
                <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                  {groupedData.smartphones.map((dt, index) => {
                    return (
                      <Product
                        key={index}
                        onPageinfo={handlePage}
                        val={index}
                        data={dt}
                      />
                    );
                  })}
                </div>
                <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
                  <ReactPaginate
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
                  />
                </div>
              </div>
            )}
            {/* SMARTPHONES CATEGORY */}
            {/* LAPTOPS CATEGORY */}
            {category === "Laptops" && (
              <div>
                <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                  {groupedData.laptops.map((dt, index) => {
                    return (
                      <Product
                        key={index}
                        onPageinfo={handlePage}
                        val={index}
                        data={dt}
                      />
                    );
                  })}
                </div>
                <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
                  <ReactPaginate
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
                  />
                </div>
              </div>
            )}
            {/* LAPTOPS CATEGORY */}
          </div>
        </div>
      )}
    </div>
  );
}
export default Homepage;
