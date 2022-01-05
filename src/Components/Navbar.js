import React, { useContext } from "react";
import { auth } from "../Config/Config";
import { useHistory } from "react-router-dom";
import { CartContext } from "../Global/CartContext";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline";

export const Navbar = ({ user }) => {
  const history = useHistory();
  const { totalQty } = useContext(CartContext);

  // handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className=" flex items-center bg-amazon_blue p-1 flex-grow py-1.5">
        <div className=" flex items-center flex-grow sm:flex-grow-0 -py-2 mx-6">
          <img
            src="https://i.ibb.co/X21TYHy/riancci1-logo.png"
            width={120}
            height={40}
            className="cursor-pointer"
            onClick={() => history.push("/")}
            alt=""
          />
        </div>
        <div className="bg-yellow-400 flex hover:bg-yellow-500 sm:flex hidden items-center h-10 rounded-md flex-grow cursor-pointer ">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink outline-none px-4"
            placeholder="Search for products, brands and more"
          />
          <SearchIcon className="h-12 p-4  " />
        </div>

        <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap ">
          <div>
            {user && (
              <span
                className="link  font-extrabold md:text-sm cursor-pointer"
                onClick={handleLogout}
              >
                Sign Out
              </span>
            )}
            {!user && (
              <span className="link  font-extrabold md:text-sm cursor-pointer"  onClick={() => history.push("/login")}>
               Sign In
              </span>
            )}
          </div>
          <div className="link" onClick={() => history.push("/orders")}>
            <span className="pb-2">Returns</span>
            <span className=" font-extrabold md:text-sm"> & Orders</span>
          </div>
          <div
            className="relative flex  items-center cursor-pointer"
            onClick={() => history.push("/cartproducts")}
          >
            <span className="absolute top-0 right-0 left-8 md:right-10 sm:right-10 h-5 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">
              {totalQty}
            </span>

            <ShoppingCartIcon className="h-10 " />

            <span className="link font-extrabold md:text-sm hidden sm:inline mt-2 ">
              Basket
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue text-white text-sm p-2 space-x-3 pl-3">
        <span className="link flex items-center ">
          <MenuIcon className="h-5 mr-1" />
          All
        </span>
        <span className="link">Top Outfits</span>
        <span className="link">Rianncci Business</span>
        <span className="link">Today's Deals</span>
        <span className="link hidden lg:flex">Electronics</span>
        <span className="link hidden lg:flex">Food & Grocery</span>
        <span className="link hidden lg:flex">Shirts</span>
        <span className="link hidden lg:flex">Buy Again</span>
        <span className="link hidden lg:flex">Shopper Toolkit</span>
        <span className="link hidden lg:flex">Health & Personal Care</span>
      </div>
    </header>
  );
};
