import React, { useContext, useState } from "react";

// import icons
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { MdOutlineBathtub } from "react-icons/md";

// import headless ul
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const BathsDropdown = () => {
  const { bath, setBath } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const baths = [
    {
      value: "Baths count (any)",
    },
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
    {
      value: "4",
    },
    {
      value: "5",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <MdOutlineBathtub className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{bath}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {baths.map((bath, index) => {
          return (
            <Menu.Item
              onClick={() => setBath(bath.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {bath.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default BathsDropdown;
