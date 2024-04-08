import { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchValue, setValue] = useState("");

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <SearchContext.Provider value={{ ValueSearch: searchValue, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
