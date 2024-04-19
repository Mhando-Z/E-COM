import React, { useContext, useEffect, useState } from "react";
import Product from "./../Components/Product";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import ProductsContext from "../Context/ProductsContext";
import SearchIcon from "@mui/icons-material/Search";
import ScrollToTopButton from "../Components/pageScroll";
import Grow from "@mui/material/Grow";
import Switcher from "../Darktheme/Switcher";

function Homepage() {
  const { data } = useContext(ProductsContext);
  const [query, setQuery] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [groupedData, setGroup] = useState([]);
  const [category, setCategory] = useState(" ");
  const [visibleItems, setVisible] = useState(10);
  const navigate = useNavigate();

  let itemsPerPage = 20;

  //Search Function
  const handleSearch = (e) => {
    setQuery(e.target.value.toLocaleLowerCase());
  };

  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 5);
  };
  const loadLess = () => {
    setVisible((prevVisible) => prevVisible - 5);
  };

  const handlePage = () => {
    setShowContent1(!showContent1);
    setShowContent2(!showContent2);
  };

  const handlePress = (e) => {
    if (e.code === "Enter") {
      navigate(`SearchResults/${query}`);
    }
  };

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
    if (event.target.value === "All") {
      setShowContent1(true);
      setShowContent2(false);
    } else {
      setShowContent1(false);
      setShowContent2(true);
    }
  };

  return (
    <div>
      <div className="container sticky top-0 mx-auto">
        {/* Search function and category section */}
        <div className="flex flex-col mb-5 gap-y-5 md:flex-row md:items-center justify-between dark:bg-gray-700 bg-gray-300 shadow-xl p-4 rounded-lg">
          <div className="relative">
            <input
              type="search"
              onKeyDown={(e) => handlePress(e)}
              onChange={(e) => handleSearch(e)}
              className="relative w-full font-semibold text-start md:w-[400px] outline-none focus:outline-none ring-2 ring-pink-500  bg-gray-200 bg-opacity-85 rounded-lg p-1"
            />
            <Link
              to={`SearchResults/${query}`}
              onClick={() => setQuery(() => " ")}
              className="absolute py-1 px-4 bg-pink-500 text-white rounded-lg font-semibold right-0"
            >
              <SearchIcon />
              Search
            </Link>
          </div>
          <div className="flex flex-row justify-center  gap-x-5  ">
            <div className="flex flex-row items-center gap-x-5">
              <div>
                <Switcher />
              </div>
              <div>
                <h1 className="text-xl dark:text-gray-100 font-semibold">
                  Categories
                </h1>
              </div>
              <select
                value={category}
                onChange={handleChange}
                className="bg-gray-200 bg-opacity-85 border border-gray-300 text-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value={"All"}>All Products</option>
                <option value={"laptops"}>Laptops</option>
                <option value={"smartphones"}>Smartphones</option>
                <option value={"music"}>Music Devices</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Products show */}
      {showContent1 && (
        <div className="container mx-auto">
          <Grow in={true} timeout={1800}>
            <div className="grid xs:grid-cols-2 [150px]:grid-cols-1 gap-5 md:grid md:grid-cols-4 xl:grid-cols-5 justify-center">
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
          </Grow>
          <div className="mt-10 text-xl dark:bg-gray-700 bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
            <ReactPaginate
              className="text-xl flex items-center justify-evenly gap-x-3"
              pageClassName=" bg-gray-200 px-2"
              activeClassName="bg-pink-500 text-white"
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
          <div className="container mx-auto mt-5">
            {/*  CATEGORIZATIONS  SECTIONS*/}
            <div>
              <Grow in={true} timeout={1800}>
                <div className="grid sm:grid-cols-3 xs:grid-cols-2 [150px]:grid-cols-1 gap-5 md:grid md:grid-cols-5 items-center justify-center">
                  {groupedData[category]
                    ?.slice(0, visibleItems)
                    .map((dt, index) => {
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
              </Grow>
              <div className="mt-10 dark:bg-gray-700 dark:text-gray-200 text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-evenly ">
                <button
                  className="text-xl py-1 px-10 ring-2 dark:ring-gray-100 dark:ring-1 ring-pink-500 font-semibold rounded-lg"
                  onClick={loadMore}
                >
                  Load More
                </button>

                <button
                  className="text-xl py-1 px-10  ring-2 dark:ring-gray-100 dark:ring-1 ring-pink-500 font-semibold rounded-lg"
                  onClick={loadLess}
                >
                  Load Less
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
}
export default Homepage;
