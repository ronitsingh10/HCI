import React from "react";
import { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState("Price range (any)");

  const [bath, setBath] = useState("Bathrooms count (any)");

  const [bed, setBed] = useState("Bedrooms count (any)");

  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    uniqueCountries.sort((a, b) => a.localeCompare(b));

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];

    // set properties state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set loading
    setLoading(true);

    // function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);

    // get second value
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        bed == house.bedrooms &&
        bath == house.bathrooms
      ) {
        return house;
      }

      // if all values are default
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(bed) &&
        isDefault(bath)
      ) {
        return house;
      }

      // if country is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(bed) &&
        isDefault(bath)
      ) {
        return house.country === country;
      }

      // if property is not default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(bed) &&
        isDefault(bath)
      ) {
        return house.type === property;
      }

      // if price is not default
      if (
        isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        isDefault(bed) &&
        isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if bed is not default
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        !isDefault(bed) &&
        isDefault(bath)
      ) {
        return house.bedrooms == bed;
      }

      // if bath is not default
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(bed) &&
        !isDefault(bath)
      ) {
        return house.bathrooms == bath;
      }

      // country & property is not default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(bed) &&
        isDefault(bath)
      ) {
        return house.type === property && house.country === country;
      }

      // country & price is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        isDefault(bed) &&
        isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // country & bed is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        !isDefault(bed) &&
        isDefault(bath)
      ) {
        return house.bedrooms == bed && house.country === country;
      }

      // country & bath is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(bed) &&
        !isDefault(bath)
      ) {
        return house.bathrooms == bath && house.country === country;
      }

      // property & price is not default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(bed) &&
        isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

      // property & bed is not default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        !isDefault(bed) &&
        isDefault(bath)
      ) {
        return house.bedrooms == bed && house.type === property;
      }

      // property & bath is not default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(bed) &&
        !isDefault(bath)
      ) {
        return house.bathrooms == bed && house.type === property;
      }

      // price & bed is not default
      if (
        isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        !isDefault(bed) &&
        isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.bedrooms == bed;
        }
      }

      // price & bed is not default
      if (
        isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        isDefault(bed) &&
        !isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.bathrooms == bath;
        }
      }

      // bed & bath is not default
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        !isDefault(bed) &&
        !isDefault(bath)
      ) {
        return house.bedrooms == bed && house.bathrooms == bath;
      }

      // country, property & price is not default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(bed) &&
        isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property && house.country === country;
        }
      }

      // country, property & bed is not default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        !isDefault(bed) &&
        isDefault(bath)
      ) {
        return (
          house.type === property &&
          house.country === country &&
          house.bedrooms == bed
        );
      }

      // country, property & bath is not default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(bed) &&
        !isDefault(bath)
      ) {
        return (
          house.type === property &&
          house.country === country &&
          house.bathrooms == bath
        );
      }

      // country, price & bed is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        !isDefault(bed) &&
        isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country && house.bedrooms == bed;
        }
      }

      // country, price & bath is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        isDefault(bed) &&
        !isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country && house.bathrooms == bath;
        }
      }

      // country, bed & bath is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        !isDefault(bed) &&
        !isDefault(bath)
      ) {
        return (
          house.bedrooms == bed &&
          house.country === country &&
          house.bathrooms == bath
        );
      }

      // property, price & bed is not default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        !isDefault(bed) &&
        isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property && house.bedrooms == bed;
        }
      }

      // property, price & bath is not default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(bed) &&
        !isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property && house.bathrooms == bath;
        }
      }

      // property, bed & bath is not default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        !isDefault(bed) &&
        !isDefault(bath)
      ) {
        return (
          house.type === property &&
          house.bathrooms == bath &&
          house.bedrooms == bed
        );
      }

      // only country is default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        !isDefault(bed) &&
        !isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return (
            house.type === property &&
            house.bathrooms == bath &&
            house.bedrooms == bed
          );
        }
      }

      // only property is default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        !isDefault(bed) &&
        !isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return (
            house.country === country &&
            house.bathrooms == bath &&
            house.bedrooms == bed
          );
        }
      }

      // only price is default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        !isDefault(bed) &&
        !isDefault(bath)
      ) {
        return (
          house.type === property &&
          house.country === country &&
          house.bathrooms == bath &&
          house.bedrooms == bed
        );
      }

      // only bed is default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(bed) &&
        !isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return (
            house.country === country &&
            house.bathrooms == bath &&
            house.type === property
          );
        }
      }

      // only bath is default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        !isDefault(bed) &&
        isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return (
            house.country === country &&
            house.bedrooms == bed &&
            house.type === property
          );
        }
      }

      // all are non default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        !isDefault(bed) &&
        !isDefault(bath)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return (
            house.country === country &&
            house.bedrooms == bed &&
            house.type === property &&
            house.bathrooms == bath
          );
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
        loading,
        bath,
        setBath,
        bed,
        setBed,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
