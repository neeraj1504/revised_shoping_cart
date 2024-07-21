import React from "react";
import { useDispatch } from 'react-redux';
import { useFetchPosts } from '../pages/useFetchposts';
import { GetNewItem } from "../redux/Slices/Data_slice";

const Button = () => {
    const {posts}=useFetchPosts();
    const dispatch=useDispatch();
    function findCategory(event){
           const data=event.target.value;
           dispatch(GetNewItem({data,posts}))
    }
  return (
    <div>
      <div className="flex justify-center gap-6 mt-3 text-ms font-semibold text-black">
        <div>
          <button onClick={findCategory} value=" " className="hover:scale-110 px-2 py-[1px] border border-gray-300 rounded-md shadow-md">All Product</button>
        </div>
        <div>
          <button onClick={findCategory} value="men" className="hover:scale-110 px-2 py-[1px] border border-gray-300 rounded-md shadow-md">Men's</button>
        </div>
        <div>
          <button onClick={findCategory} value="women" className=" hover:scale-110 px-2 py-[1px] border border-gray-300 rounded-md shadow-md">Woman's</button>
        </div>
        <div>
          <button onClick={findCategory} value="electronic" className="hover:scale-110 px-2 py-[1px] border border-gray-300 rounded-md shadow-md">Electronics</button>
        </div>
      </div>
    </div>
  );
};

export default Button;
