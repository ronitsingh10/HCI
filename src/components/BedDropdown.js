import React, { useContext, useState } from "react";

// import icons
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";

// import headless ul
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const BedsDropdown = () => {
  const { bed, setBed } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const beds = [
    {
      value: "Beds count (any)",
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
        <IoBedOutline className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{bed}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {beds.map((bed, index) => {
          return (
            <Menu.Item
              onClick={() => setBed(bed.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {bed.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default BedsDropdown;
