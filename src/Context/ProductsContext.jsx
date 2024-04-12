import { createContext, useEffect, useState } from "react";
import { commerce } from "./../Lib/commerce";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [data, setData] = useState([]);
  const [Categories, setCatego] = useState([]);

  ///FFETCHING OF DATA FROM COMMERCE API LOGIC

  async function getProducts() {
    try {
      const { data } = await commerce.products.list({ limit: 199 });
      setData(data);
    } catch (error) {}
  }
  async function getCategories() {
    try {
      const { data } = await commerce.categories.list();
      setCatego(data);
    } catch (error) {}
  }
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <ProductsContext.Provider value={{ data, Categories }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsContext;
