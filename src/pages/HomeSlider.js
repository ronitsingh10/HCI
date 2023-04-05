import React from "react";
import { housesData } from "../data";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

const HomeSlider = () => {
  const allHouseImages = housesData.map((house) => {
    return house.image;
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `Home`;
    navigate(path);
  };

  return (
    <main className="flex flex-col -mt-5 items-center justify-center m-12 ">
      <div className="max-w-[768px]">
        <Carousel autoSlide={true}>
          {allHouseImages.map((x) => (
            <img src={x} />
          ))}
        </Carousel>
      </div>
      <button
        onClick={routeChange}
        className="relative -mt-20 rounded bg-neutral-50 px-6 pt-2.5 pb-2 text-xs font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]"
      >
        Find your swamp
      </button>
    </main>
  );
};

export default HomeSlider;
