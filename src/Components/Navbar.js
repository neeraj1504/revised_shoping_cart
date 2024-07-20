import React from "react";
import Logo from "./ecart2.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./Search";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className="flex  justify-between items-center h-[60px] max-w-5xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src={Logo}
              alt="logo"
              className="h-14 w-14 object-cover rounded-full"
            />
          </div>
        </NavLink>
        <SearchBar />
        <div className="flex flex-row justify-center items-center text-slate-100 space-x-6">
          <NavLink to="/">
            <div>
              <p className=" border border-gray-600 rounded-md shadow-2xl p-1">
                Home
              </p>
            </div>
          </NavLink>
          <NavLink to="/login">
            <div>
              <p className=" border border-gray-600 rounded-md shadow-2xl p-1">
                Log In
              </p>
            </div>
          </NavLink>
          <NavLink to="/signup">
            <div>
              <p className=" border border-gray-600 rounded-md  shadow-2xl p-1">
                Sign Up
              </p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
                justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
