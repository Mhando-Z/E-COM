import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Aboutuspage, Productspage } from "./Pages/Collection";
import { Contactus, Cartpage, Paypage } from "./Pages/Collection";
import { SearchResults, SearchResult } from "./Pages/Collection";
import { Navbar, Footer } from "./Components/collect";
import { ProductsProvider } from "./Context/ProductsContext";
import { CartProvider } from "./Context/CartsContext";
import { SearchProvider } from "./Context/SearchContext";

function App() {
  return (
    <div className="flex flex-col gap-y-10 h-screen justify-between">
      <ProductsProvider>
        <SearchProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Homepage />} />
                  <Route path="/Cartpage" element={<Cartpage />} />
                  <Route path="/Productspage/:id" element={<Productspage />} />
                  <Route path="/SearchResult/:id" element={<SearchResult />} />
                  <Route
                    path="/SearchResults/:id"
                    element={<SearchResults />}
                  />
                  <Route path="/AboutUs" element={<Aboutuspage />} />
                  <Route path="/ContactUs" element={<Contactus />} />
                  <Route path="/Paypage/:id" element={<Paypage />} />
                </Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </CartProvider>
        </SearchProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
