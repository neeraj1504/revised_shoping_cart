import React from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";
import {  useSelector } from "react-redux";
import { useFetchPosts } from "../pages/useFetchposts"; // Adjust the path accordingly


const Home = () => {
  const { loading} = useFetchPosts();
  
  const value = useSelector((state) => state.Data);
  console.log("value of array is ", value);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : value.length > 0 ? (
          <div
            className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
           max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]"
          >
            {value.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-semibold hover:text-3xl  ">No Data Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
