import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
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
    <div className="">
      <div className="dark:bg-gray-700 p-1  w-full dark:text-gray-200 bg-gray-300 relative md:p-2 md:mb-16 mb-3 shadow-xl py-2 mt-2 flex lg:container lg:mx-auto px-1  items-center justify-between">
        <div className="">
          <NavLink className="" to={"/"}>
            <h1 className="uppercase md:text-2xl text-xl font-bold">E-com</h1>
          </NavLink>
        </div>
        <div className="md:flex-1 md:flex hidden items-center gap-x-10 justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline  underline-offset-8 dark:decoration-gray-200 decoration-pink-600"
                : ""
            }
            to={"/"}
          >
            <h1 className="md:text-xl xl:text-2xl  hover:underline  dark:hover:text-blue-400  dark:hover:decoration-gray-200 hover:font-semibold hover:decoration-pink-600 hover:underline-offset-8 hover:text-pink-600">
              Home
            </h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline  underline-offset-8 dark:decoration-gray-200 decoration-pink-600"
                : ""
            }
            to={`/AboutUs`}
          >
            <h1 className="md:text-xl xl:text-2xl hover:underline  dark:hover:text-blue-400   dark:hover:decoration-gray-200 hover:font-semibold hover:decoration-pink-600 hover:underline-offset-8 hover:text-pink-600">
              About Us
            </h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline  underline-offset-8 dark:decoration-gray-200 decoration-pink-600"
                : ""
            }
            to={`/ContactUs`}
          >
            <h1 className="md:text-xl xl:text-2xl hover:underline dark:hover:text-blue-400  dark:hover:decoration-gray-200 hover:font-semibold hover:decoration-pink-600 hover:underline-offset-8 hover:text-pink-600">
              Contact Us
            </h1>
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center">
          <NavLink to={"/Cartpage"}>
            <IconButton aria-label="cart">
              <Badge badgeContent={cart.total_items} color="secondary">
                <ShoppingCartIcon
                  className="dark:text-gray-200"
                  sx={{ fontSize: "2.2rem" }}
                />
              </Badge>
            </IconButton>
          </NavLink>
        </div>
        {/* For smalll screen */}
        <div className="lg:hidden flex items-center gap-y-2">
          <NavLink to={"/Cartpage"}>
            <IconButton aria-label="cart">
              <Badge badgeContent={cart.total_items} color="secondary">
                <ShoppingCartIcon
                  className="dark:text-gray-200"
                  sx={{ fontSize: "1.7rem", mr: "7px", alignItems: "center" }}
                />
              </Badge>
            </IconButton>
          </NavLink>
        </div>
        {/* Menuicon logic or humbuger menu logic */}
        <div onClick={handleMenuVisibility} className="md:hidden flex">
          <MenuIcon sx={{ fontSize: "1.7rem" }} className="" />
          {isMenuVisible && (
            <div
              className={`flex flex-col bg-gray-600 p-5 bg-opacity-85 rounded-lg shadow-xl absolute right-6 left-6 top-20 z-50 items-center`}
            >
              <div className="flex flex-col text-white font-semibold gap-y-3 sm:text-2xl text-xl text-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "ring-1 ring-white py-1 px-10" : ""
                  }
                  to={`/`}
                >
                  <h1 onClick={scrollToTop} className="md:text-lg">
                    Home
                  </h1>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "ring-1 ring-white py-1 px-10" : ""
                  }
                  to={"/AboutUs"}
                >
                  <h1 onClick={scrollToTop} className="md:text-lg">
                    About Us
                  </h1>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "ring-1 ring-white py-1 px-10" : ""
                  }
                  to={`/ContactUs`}
                >
                  <h1 onClick={scrollToTop} className="md:text-lg">
                    Contact Us
                  </h1>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
