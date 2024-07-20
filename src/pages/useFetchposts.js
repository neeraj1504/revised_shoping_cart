import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { Add } from "../redux/Slices/Data_slice";
const API_URL = "https://fakestoreapi.com/products";
export const useFetchPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const dispatch=useDispatch();
  
  const fetchProductData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);
      dispatch(Add(data));
     // Dispatch the action here after setting the posts
    } catch {
      console.log("404 Data Not Fetched");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  return { loading, posts };
};
