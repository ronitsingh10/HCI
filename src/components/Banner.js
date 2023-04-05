import React from "react";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="-mt-7 h-[500px] w-full relative bottom-5 flex justify-center mb-20">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1501548881190-edab31107569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        alt=""
      ></img>
      <div className="absolute top-3/4 w-full ">
        <Search />
      </div>
    </section>
  );
};

export default Banner;
