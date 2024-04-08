import React, { useContext, useState } from "react";
import ProductsContext from "../Context/ProductsContext";
import Product from "../Components/Product";
import { Link, useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SearchResult = () => {
  const { id } = useParams();
  const { data } = useContext(ProductsContext);
  const [visibleItems, setVisible] = useState(10);
  const [query, setQuery] = useState("");

  const newData = [...data];
  const dataFilterd = newData.filter((dt) => {
    return dt.name.toLowerCase().includes(id);
  });
  //Search Function
  const handleSearch = (e) => {
    setQuery(e.target.value.toLocaleLowerCase());
  };

  //LOADMORE BUTTONS LOGIC
  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 5);
  };
  const loadLess = () => {
    setVisible((prevVisible) => prevVisible - 5);
  };

  return (
    <div className="container mx-auto bg-gray-300 shadow-xl ">
      <div className="bg-gray-300 shadow-xl rounded-lg p-3">
        <h1 className="text-xl sm:text-2xl font-semibold md:text-2xl text-center md:text-left">
          Search results for "{id}"
        </h1>
      </div>
      {dataFilterd.length === 0 ? (
        <div className="flex items-center justify-center p-10">
          <h1 className="text-2xl">No Results Found....</h1>
        </div>
      ) : (
        <div>
          <div className=" grid sm:grid-cols-3 xs:grid-cols-2 [150px]:grid-cols-1 gap-5 md:grid-cols-5 items-center justify-center">
            {dataFilterd.slice(0, visibleItems).map((dt, index) => {
              return <Product key={index} val={index} data={dt} />;
            })}
          </div>
          <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
            {visibleItems < dataFilterd.length ? (
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
      <div className="relative container mx-auto">
        <input
          type="search"
          onChange={(e) => handleSearch(e)}
          className="relative w-full  bg-gray-200 bg-opacity-85  rounded-lg p-1"
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
    </div>
  );
};

export default SearchResult;
