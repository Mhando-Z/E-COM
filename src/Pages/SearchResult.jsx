import React, { useContext, useRef, useState } from "react";
import ProductsContext from "../Context/ProductsContext";
import Product from "../Components/Product";
import { useParams, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SearchResults = () => {
  const { id } = useParams();
  const { data } = useContext(ProductsContext);
  const [visibleItems, setVisible] = useState(10);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const ref = useRef(null);

  //handle reset input function
  const handleReset = () => {
    ref.current.value = "";
  };

  const newData = [...data];
  const dataFilterd = newData.filter((dt) => {
    return dt.name.toLowerCase().includes(id);
  });
  //Search Function
  const handleSearch = (e) => {
    setQuery(e.target.value.toLocaleLowerCase());
  };
  const HandleSearch = () => {
    if (query.length !== 0) {
      navigate(`/SearchResults/${query}`);
      handleReset();
    }
  };
  // Keypress function
  const handlePress = (e) => {
    if (query.length !== 0) {
      if (e.keyCode === 13) {
        navigate(`/SearchResults/${query}`);
        handleReset();
      }
    }
  };

  //LOADMORE BUTTONS LOGIC
  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 5);
  };
  const loadLess = () => {
    setVisible((prevVisible) => prevVisible - 5);
  };

  return (
    <div className="container mx-auto shadow-xl  ">
      <div className="flex flex-col">
        <div className="mb-5 flex flex-col md:flex-row gap-y-3 items-center">
          <input
            ref={ref}
            type="search"
            onKeyDown={(e) => handlePress(e)}
            onChange={(e) => handleSearch(e)}
            className="outline-none relative w-full text-start md:w-[400px] dark:text-black ring-2 ring-pink-500 bg-gray-200 bg-opacity-85 md:rounded-l-lg p-1"
          />
          <button
            onClick={HandleSearch}
            className="py-1 px-4 bg-pink-500 text-white md:rounded-r-lg font-semibold "
          >
            <SearchIcon />
            Search
          </button>
        </div>
      </div>
      <div className="bg-gray-300 dark:bg-gray-700 dark:text-gray-200 shadow-xl mt-5 mb-5 rounded-lg p-3">
        <h1 className="text-xl sm:text-2xl font-semibold md:text-2xl text-center md:text-left">
          Search results for "{id}"
        </h1>
      </div>
      {dataFilterd.length === 0 ? (
        <div className="flex items-center dark:bg-gray-700 dark:text-gray-200 justify-center p-10">
          <h1 className="text-2xl">No Results Found....</h1>
        </div>
      ) : (
        <div className="mt-2">
          <div className=" grid xs:grid-cols-2 [150px]:grid-cols-1 gap-5 md:grid-cols-5 justify-center">
            {dataFilterd.slice(0, visibleItems).map((dt, index) => {
              return <Product key={index} val={index} data={dt} />;
            })}
          </div>
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
      )}
    </div>
  );
};

export default SearchResults;
