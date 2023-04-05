import React from "react";
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <div className="h-12 antialiased font-semibold text-2xl -mt-10 mx-32 mb-4">
        <h1>Browse homes in Gainesville, FL</h1>
      </div>
      <HouseList />
    </div>
  );
};

export default Home;
