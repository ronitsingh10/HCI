import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const PropertyCard = ({ house }) => {
  const {
    image,
    type,
    name,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = house;

  const rating = Math.floor(Math.random() * 5) + 1;
  const reviews = Math.floor(Math.random() * 100) + 1;

  return (
    <div>
      <div>
        <img
          className="h-80 w-full object-cover rounded-lg shadow-md"
          src={image}
          alt=""
        />
        <div className="relative px-4 -mt-20 z-0">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                {type}
              </span>
              <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                {bedrooms} beds &bull; {bathrooms} baths
              </div>
            </div>
            <h4 className="mt-1 font-semibold text-lg leading-relaxed truncate">
              {name}
            </h4>
            <h4 className="text-xs font-light leading-tight truncate">
              {address}
            </h4>
            <div className="mt-1">
              ${Number(price).toLocaleString()}{" "}
              <span className="text-gray-600 text-sm">/ month</span>
            </div>
            <div className="mt-2 flex items-center">
              {[...Array(5)].map((e, i) => (
                <AiTwotoneStar
                  className={`h-4 w-4 fill-current ${
                    i <= rating ? "text-teal-500" : "text-gray-400"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                {" "}
                {reviews} reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
