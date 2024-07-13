import React from "react";
import { add, remove } from "../redux/Slices/Cartslices";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.warning("Item removed From Cart");
  };
  return (
    <div
      className="flex flex-col items-center justify-center  box-border
    hover:scale-110 transition-300 ease-in gap-2 pb-2 p-2 mt-10 ml-5 rounded-xl outline hover:shadow-custom w-60 "
    >
      <div>
        <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </div>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[120px]">
        <img src={post.image} alt="item" className="h-full w-full" />
        
      </div>
      <div className="flex justify-between gap-10 items-center w-11/12 mt-5">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
     <div>
     {cart.some((p) => p.id === post.id) ? (
        <button onClick={removeFromCart}
        className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 uppercase
        font-semibold hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer
        ">remove Item</button>
      ) : (
        <buttton onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 uppercase 
        font-semibold hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer">Add to Cart</buttton>
      )}
     </div>
      </div>
    </div>
  );
};

export default Product;








