import React, { useContext, useEffect, useState } from "react";
import Product from "./../Components/Product";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import ProductsContext from "../Context/ProductsContext";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Homepage() {
  const { data } = useContext(ProductsContext);
  const [itemOffset, setItemOffset] = useState(0);
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [groupedData, setGroup] = useState([]);
  const [category, setCategory] = useState(" ");

  const handlePage = () => {
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

  //CATEGORIZATION LOGIC
  const handleChange = (event) => {
    setCategory(event.target.value);
    if (event.target.value === "Smartphones") {
      if (showContent1 === true) {
        setShowContent1(false);
        setShowContent2(true);
      }
      if (showContent2 === false) {
        setShowContent1(false);
        setShowContent2(true);
      }
    } else if (event.target.value === "Laptops") {
      if (showContent1 === true) {
        setShowContent1(false);
        setShowContent2(true);
      }
      if (showContent2 === false) {
        setShowContent1(false);
        setShowContent2(true);
      }
    } else if (event.target.value === "All") {
      setShowContent1(true);
    }
  };

  console.log(category);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-5 md:flex-row md:items-center justify-between bg-gray-300 shadow-xl p-4 rounded-lg">
          <div className="relative">
            <input
              type="search"
              className="relative w-full focus:md:w-[400px] transition ease-in-out duration-700 bg-gray-200 bg-opacity-85  rounded-lg p-1"
            />
            <Link className="absolute py-1 px-4 bg-pink-500 text-white rounded-lg font-semibold right-0">
              <SearchIcon />
              Search
            </Link>
          </div>
          <div className="flex flex-row justify-evenly items-center gap-x-5  ">
            <div>
              <h1 className="text-xl">Categories</h1>
            </div>
            <div>
              <Select value={category} label="Age" onChange={handleChange}>
                <MenuItem value={"All"}>All Products</MenuItem>
                <MenuItem value={"Laptops"}>Laptops</MenuItem>
                <MenuItem value={"Smartphones"}>Smartphones</MenuItem>
                <MenuItem value={"Music"}>Music Devices</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </div>
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
          {/* PRODUCT CATEGORIZATIONS */}
          <div className="container mx-auto mt-24">
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
