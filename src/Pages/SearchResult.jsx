import React, { useContext, useState } from "react";
import ProductsContext from "../Context/ProductsContext";
import Product from "../Components/Product";
import SearchContext from "../Context/SearchContext";

const SearchResults = () => {
  const { ValueSearch } = useContext(SearchContext);
  const { data } = useContext(ProductsContext);
  const [activeSearch, setActiveSearch] = useState([]);
  const [visibleItems, setVisible] = useState(10);
  const [searchQuery, setSearchQuery] = useState("jbl");

  console.log(ValueSearch);

  //LOADMORE BUTTONS LOGIC
  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 5);
  };
  const loadLess = () => {
    setVisible((prevVisible) => prevVisible - 5);
  };

  const handleSearch = (e) => {
    const ValueSearch = e.target.value;
    setSearchQuery(ValueSearch);
    if (ValueSearch === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(function search() {
      const search_params = Object.keys(Object.assign({}, ...data));
      return data.filter((data) => {
        return search_params.some((param) => {
          const paramValue = data[param];
          if (paramValue !== undefined && paramValue !== null) {
            const stringValue = paramValue.toString().toLowerCase();
            return stringValue.includes(ValueSearch.toLowerCase());
          }
          return false;
        });
      });
    });
  };

  return (
    <div className="container mx-auto h-96">
      <form className="w-full">
        <div className="">
          <input
            type="search"
            placeholder="Type Here"
            className="w-full p-2 lg:p-3 rounded-full text-xl text-slate-200 text-center bg-slate-800"
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
          />
        </div>

        <div className=" p-4 bg-slate-800 text-white w-full rounded-xl flex flex-col gap-2">
          <div>
            <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-5 items-center justify-center">
              {activeSearch.slice(0, visibleItems).map((dt, index) => {
                return <Product key={index} val={index} data={dt} />;
              })}
            </div>
            <div className="mt-10  text-xl bg-gray-300 p-2 shadow-xl flex items-center justify-center ">
              {visibleItems < activeSearch.length ? (
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
        </div>
      </form>
    </div>
  );
};

export default SearchResults;
