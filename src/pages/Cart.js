import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cartitems from "../Components/Cartitems";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      <div>
        {cart.length > 0 ? (
          
          <div className="flex flex-row w-[100%]">
            <div className="p-4 bg-white w-[50%]">
              {cart.map((item, index) => {
                return (
                  <Cartitems key={item.id} item={item} itemIndex={index} />
                );
              })}
            </div>            
            <div className=" w-[50%] p-4 flex flex-col  justify-between   bg-white">
              <div className="flex flex-col  mb-4">
                <div className="text-green-700 text-1xl font-bold">
                  Your Cart
                </div>
                <div className="text-2xl text-green-500 font-bold ">Summary</div>
                <p className="mt-2">
                  <span className="text-sm font-semibold">Total Items:<span className="font-bold">{cart.length}</span></span>
                </p>
              </div>

              <div className="flex flex-col ">
                <p className="text-sm font-semibold">
                  Total Amount: <span className="font-bold">${totalAmount}</span>
                </p>
                <button className=" w-[50%] mt-4 px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300">
                  Check Out Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-[17px] font-bold">Your Cart Empty!</h1>
            <Link to={"/"}>
              <button
                className="hover:scale-110 bg-green-600 border p-2 rounded-md 
              mt-2 hover:text-white transition duration-300 ease-in
                "
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
