import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../Context/CartsContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  //scroll top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 ">
      <div className="bg-gray-300 relative md:p-5 p-3 md:mb-16 mb-3 shadow-xl mt-1 flex container mx-auto items-center justify-between">
        <div className="">
          <Link className="" to={"/"}>
            <h1 className="uppercase md:text-2xl text-xl font-bold">E-com</h1>
          </Link>
        </div>
        <div className="md:flex hidden items-center gap-x-10 justify-between">
          <Link
            className="text-xl xl:text-2xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-xl xl:text-2xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
            to={`/AboutUs`}
          >
            About Us
          </Link>
          <Link
            className="text-xl xl:text-2xl hover:underline duration-1000 hover:scale-y-110 hover:underline-offset-8 decoration-pink-600"
            to={`/ContactUs`}
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link to={"/Cartpage"}>
            <IconButton aria-label="cart">
              <Badge badgeContent={cart.total_items} color="primary">
                <ShoppingCartIcon sx={{ fontSize: "2.2rem", mr: "7px" }} />
              </Badge>
            </IconButton>
          </Link>
        </div>
        {/* For smalll screen */}
        <div className="lg:hidden flex">
          <Link to={"/Cartpage"}>
            <IconButton aria-label="cart">
              <Badge badgeContent={cart.total_items} color="primary">
                <ShoppingCartIcon sx={{ fontSize: "1.7rem", mr: "7px" }} />
              </Badge>
            </IconButton>
          </Link>
        </div>
        <div onClick={handleMenuVisibility} className="md:hidden  flex">
          <MenuIcon className="" />
          {isMenuVisible && (
            <div
              className={`flex flex-col bg-gray-600 p-5 bg-opacity-85 rounded-lg shadow-xl absolute right-6 left-6 top-20 z-50 items-center`}
            >
              <div className="flex flex-col text-white font-semibold gap-y-3 sm:text-2xl text-xl text-center">
                <Link onClick={scrollToTop} className="" to={"/"}>
                  Home
                </Link>
                <Link onClick={scrollToTop} className="" to={"/AboutUs"}>
                  About Us
                </Link>
                <Link onClick={scrollToTop} className="" to={"/ContactUs"}>
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
