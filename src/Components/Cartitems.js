// import React from "react";
// import { MdDelete } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import {  remove } from "../redux/Slices/Cartslices";
// import { toast } from "react-toastify";

// const Cartitems = ({ item, itemIndex }) => {
//   const dispatch = useDispatch();
//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.warning("Item removed");
//   };
//   return (
//     <div >
//       <div className="flex gap-10 m-12 border-b-4" >

//         <div className="h-[150px]">
//           <img src={item.image} alt="logo" className="h-full w-fit" />
//         </div>

//         <div>
//           <h1 className="font-semibold">{item.title}</h1>
//           <p>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
//           <div className="flex justify-between p-2 w-full">
//             <p className="text-green-600 font-semibold">${item.price}</p>
//             <div onClick={removeFromCart} className="w-[35px] h-[35px] bg-red-500 opacity-20 rounded-full   grid place-items-center cursor-pointer  ">
//             <MdDelete className="text-black text-2xl font-bold"/>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Cartitems;


import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/Cartslices";
import { toast } from "react-toastify";

const Cartitems = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.warning("Item removed");
  };

  return (
    <div className="m-4 p-4 border-b border-gray-500">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-shrink-0 w-full md:w-[150px] h-[150px]">
          <img
            src={item.image}
            alt="logo"
            className="h-full w-full object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div>
            <h1 className="font-semibold text-lg">{item.title}</h1>
            <p className="text-gray-600">
              {item.description.split(" ").slice(0, 15).join(" ") + "..."}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="w-[35px] h-[35px] bg-red-500 opacity-20 rounded-full grid place-items-center cursor-pointer hover:opacity-50 transition-opacity"
            >
              <MdDelete className="text-black text-2xl font-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;


