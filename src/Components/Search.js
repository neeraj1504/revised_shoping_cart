import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";

import { useDispatch } from 'react-redux';
import { useFetchPosts } from '../pages/useFetchposts';
import {GetNewItem} from "../redux/Slices/Data_slice"

const SearchBar = () => {
    const [data, setData] = useState('');
    const {posts}=useFetchPosts();
    function searchHandler(event) {
        setData(event.target.value);
        console.log(event.target.value); // Log the current input value
    }
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(GetNewItem({posts,data}));
    },[data])

    return (
        <div className="flex items-center border justify-between border-blue-700 rounded-full pr-2 py-2">
            <input
                onChange={searchHandler}
                className="appearance-none bg-transparent border-none w-full text-white mr-3 px-3 leading-tight focus:outline-none"
                type="text"
                placeholder="Search..."
                aria-label="Search"
            />
            <button><IoIosSearch className='text-white font-bold text-2xl' /></button>
        </div>
    );
};

export default SearchBar;
