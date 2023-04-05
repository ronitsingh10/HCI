import React from "react";

import { housesData } from "../data";

import { useParams } from "react-router-dom";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

import { Link } from "react-router-dom";

import { MdPool, MdOutlinePool, MdCountertops } from "react-icons/md";
import { IoIosFitness, IoIosBasketball } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
import { MdElevator, MdPets, MdOutdoorGrill, MdSpeed } from "react-icons/md";
import { BsFillTrash3Fill, BsSnow } from "react-icons/bs";
import { GiHanger, GiWashingMachine, GiBathtub } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbMicrowave } from "react-icons/tb";
import Carousel from "../components/Carousel";
import { CgProfile } from "react-icons/cg";

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();

  // get house based on id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  const Images = [
    house.image,
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1612965607446-25e1332775ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1513&q=80",
    "https://images.unsplash.com/photo-1616137507072-f7276b168614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
    "https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  ];

  // <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="antialiased text-gray-700 font-semibold text-4xl">
              {house.name}
            </h2>
            <h3 className="antialiased font-light text-gray-900 text-lg mb-4 leading-relaxed tracking-wide">
              {house.address}
            </h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2">
            <div className="bg-sky-100 text-sky-400 px-3 rounded-full uppercase font-light tracking-wide">
              {house.type}
            </div>
            <div className="bg-sky-100 text-sky-400 px-3 rounded-full font-light tracking-wide">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-neutral-600">
            ${Number(house.price).toLocaleString()}
            <span className="text-gray-600 font-medium text-sm">/ month</span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <Carousel>
                {Images.map((x) => (
                  <img src={x} />
                ))}
              </Carousel>
            </div>
            <div className="flex gap-x-6 text-neutral-600 mb-6 ml-5">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <h1 className="antialiased text-gray-700 font-semibold text-3xl mb-4 mt-7">
              About {house.name}
            </h1>
            <div className="antialiased font-light leading-snug tracking-wide text-stone-900">
              <div>
                {`Welcome to a charming and cozy ${house.bedrooms}-bedroom, ${
                  house.bathrooms
                }-bathroom ${house.type.toLowerCase()}
              situated in a quiet and peaceful neighborhood. From the moment you
              step inside, you will be greeted by a warm and inviting living
              room, complete with hardwood floors and plenty of natural light.
             `}
              </div>
              <div className="mt-3">
                The kitchen is compact yet functional, with modern appliances,
                ample cabinet space, and a cozy breakfast nook perfect for
                enjoying your morning coffee. The two bedrooms are comfortable
                and provide a peaceful retreat at the end of a long day. The
                bathroom is stylishly designed and features a modern sink and a
                walk-in shower.
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <CgProfile className="w-full h-full text-gray-500" />
              </div>
              <div>
                <div className="font-semibold text-neutral-800 text-lg">{`${house.name} Management`}</div>
                <h2 to="" className="text-neutral-600 text-sm font-light">
                  Get in touch
                </h2>
              </div>
            </div>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message*"
              ></textarea>
              <div className="flex gap-x-2">
                {/* <ChangingButton
                  customclasses="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
                  initialText="Send message"
                  laterText="Message sent!"
                /> */}
                <button className="bg-sky-200 hover:bg-sky-300 text-sky-600 rounded p-4 text-sm w-full transition">
                  Send message
                </button>
                <button className="border border-sky-600 text-sky-600 hover:border-sky-500 hover:text-sky-500 rounded p-4 text-sm w-full transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="antialiased">
          <h1 className="antialiased text-gray-700 font-semibold text-2xl mb-4 mt-7">
            Community Ammenities
          </h1>
          <div className="flex flex-row h-40 w-full gap-2 text-neutral-600 shadow-sm">
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <MdOutlinePool className="w-20 h-20" />
              <h1 className="relative -ml-4">Swimming Pool</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <IoIosFitness className="w-20 h-20" />
              <h1 className="relative -ml-4">Fitness Center</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <IoIosBasketball className="w-20 h-20" />
              <h1 className="relative -ml-7">Basketball Court</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <AiFillLock className="w-20 h-20" />
              <h1 className="relative -ml-8">Controlled Access</h1>
            </div>
          </div>
          <div className="flex flex-row h-40 w-full gap-2 mt-2 text-neutral-600 shadow-sm">
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <MdElevator className="w-20 h-20 " />
              <h1 className="relative ml-2">Elevator</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <MdPets className="w-20 h-20" />
              <h1 className="relative -ml-4">Pet Play Area</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <MdOutdoorGrill className="w-20 h-20" />
              <h1 className="relative -ml-2">Outdoor Grill</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <BsFillTrash3Fill className="w-16 h-16 mt-2" />
              <h1 className="relative -ml-4 mt-2">Trash Pickup</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="antialiased text-gray-600 font-medium text-xl mb-3 mt-6">
            Property Services
          </div>
          <div className="antialiased flex flex-row gap-36 my-2 text-gray-500 mx-2">
            <h3>&bull; Package Service</h3>
            <h3>&bull; Maintenance on site</h3>
            <h3>&bull; Pet Play Area</h3>
          </div>
          <div className="antialiased flex flex-row gap-24 my-2 text-gray-500 mx-2">
            <h3>&bull; Community-Wide WiFi</h3>
            <h3>&bull; Trash Pickup - Door to Door</h3>
            <h3 className="-mx-2">&bull; Pet Washing Station</h3>
          </div>
          <div className="antialiased flex flex-row gap-44 text-gray-500 mx-2">
            <h3>&bull; Key Fob Entry</h3>
            <h3 className="-mx-1">&bull; Controlled Access</h3>
            <h3 className="-mx-3">&bull; Recycling</h3>
          </div>
        </div>
        <hr class="h-px w-8/12 my-8 bg-gray-200 border-0 dark:bg-gray-600" />
        <div>
          <div className="antialiased text-gray-600 font-medium text-xl mb-3">
            Shared Community
          </div>
          <div className="antialiased flex flex-row gap-52 my-2 text-gray-500 mx-2">
            <h3>&bull; Elevator</h3>
            <h3 className="mx-1">&bull; Lounge</h3>
            <h3 className="mx-9">&bull; Conference Room</h3>
          </div>
          <div className="antialiased flex flex-row gap-40 my-2 text-gray-500 mx-2">
            <h3>&bull; Storage Space</h3>
            <h3 className="-mx-1">&bull; Clubhouse</h3>
          </div>
        </div>
        <hr class="h-px w-8/12 my-8 bg-gray-200 border-0 dark:bg-gray-600" />
        <div>
          <div className="antialiased text-gray-600 font-medium text-xl mb-3">
            Fitness & Recreation
          </div>
          <div className="antialiased flex flex-row gap-44 my-2 text-gray-500 mx-2">
            <h3>&bull; Fitness Center</h3>
            <h3 className="-mx-1">&bull; Playground</h3>
            <h3 className="mx-9">&bull; Gameroom</h3>
          </div>
          <div className="antialiased flex flex-row gap-64 my-2 text-gray-500 mx-2">
            <h3>&bull; Pool</h3>
            <h3 className="-mx-1">&bull; Bike Storage</h3>
          </div>
        </div>
        <hr class="h-px w-8/12 my-8 bg-gray-200 border-0 dark:bg-gray-600" />
        <div>
          <div className="antialiased text-gray-600 font-medium text-xl mb-3">
            Outdoor Features
          </div>
          <div className="antialiased flex flex-row gap-56 my-2 text-gray-500 mx-2">
            <h3>&bull; Sundeck</h3>
            <h3 className="-mx-2">&bull; Courtyard</h3>
          </div>
          <div className="antialiased flex flex-row gap-52 my-2 text-gray-500 mx-2">
            <h3>&bull; Cabanda</h3>
            <h3 className="">&bull; Grill</h3>
          </div>
        </div>
        <div className="antialiased">
          <h1 className="antialiased text-gray-700 font-semibold text-2xl mb-4 mt-8">
            Appartment Ammenities
          </h1>
          <div className="flex flex-row h-40 w-full gap-2 text-neutral-600 shadow-sm">
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <BsSnow className="w-20 h-20" />
              <h1 className="relative -ml-7">Air Conditioning</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <MdSpeed className="w-20 h-20" />
              <h1 className="relative -ml-10">High Speed Internet</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <GiHanger className="w-20 h-20" />
              <h1 className="relative -ml-5">Walk-In Closets</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <CgSmartHomeRefrigerator className="w-20 h-20" />
              <h1 className="relative -ml-1">Refrigerator</h1>
            </div>
          </div>
          <div className="flex flex-row h-40 w-full gap-2 mt-2 text-neutral-600 shadow-sm">
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <TbMicrowave className="w-20 h-20 " />
              <h1>Microwave</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <GiWashingMachine className="w-20 h-20" />
              <h1 className="relative -ml-4">Washer/Dryer</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <GiBathtub className="w-20 h-20" />
              <h1 className="relative -ml-1">Tub/Shower</h1>
            </div>
            <div className="basis-1/4 border rounded-md pl-28 pt-8">
              <MdCountertops className="w-20 h-20" />
              <h1 className="relative -ml-10">Granite Countertops</h1>
            </div>
          </div>
          <div>
            <div className="antialiased text-gray-600 font-medium text-xl mb-3 mt-6">
              Hightlights
            </div>
            <div className="antialiased flex flex-row gap-40 my-2 text-gray-500 mx-2">
              <h3>&bull; High Speed Internet</h3>
              <h3 className="relative -mx-8">&bull; Smoke Free</h3>
              <h3 className="mx-20">&bull; Fireplace</h3>
            </div>
            <div className="antialiased flex flex-row gap-40 my-2 text-gray-500 mx-2">
              <h3>&bull; Washer/Dryer</h3>
              <h3 className="mx-3">&bull; Storage Units</h3>
              <h3 className="mx-6">&bull; Sprinkler Systems</h3>
            </div>
            <div className="antialiased flex flex-row gap-40 text-gray-500 mx-2">
              <h3>&bull; Air Conditioning</h3>
              <h3 className="-mx-1">&bull; Double Vanities</h3>
            </div>
          </div>
          <hr class="h-px w-8/12 my-8 bg-gray-200 border-0 dark:bg-gray-600" />
          <div>
            <div className="antialiased text-gray-600 font-medium text-xl mb-3">
              Kitchen Features & Appliances
            </div>
            <div className="antialiased flex flex-row gap-40 my-2 text-gray-500 mx-2">
              <h3>&bull; Dishwasher</h3>
              <h3 className="mx-8">&bull; Stainless Steel Appliances</h3>
              <h3 className="-mx-24">&bull; Range</h3>
            </div>
            <div className="antialiased flex flex-row gap-52 my-2 text-gray-500 mx-2">
              <h3>&bull; Disposal</h3>
              <h3 className="mx-2">&bull; Kitchen</h3>
              <h3 className="mx-7">&bull; Refrigerator</h3>
            </div>
            <div className="antialiased flex flex-row gap-52 text-gray-500 mx-2">
              <h3>&bull; Ice Maker</h3>
              <h3>&bull; Microwave</h3>
            </div>
          </div>
          <hr class="h-px w-8/12 my-8 bg-gray-200 border-0 dark:bg-gray-600" />
          <div>
            <div className="antialiased text-gray-600 font-medium text-xl mb-3">
              Floor Plan Details
            </div>
            <div className="antialiased flex flex-row gap-40 my-2 text-gray-500 mx-2">
              <h3>&bull; Hardwood Floors</h3>
              <h3 className="relative -mx-3">&bull; Walk-In Closets</h3>
              <h3 className="mx-8">&bull; Patio</h3>
            </div>
            <div className="antialiased flex flex-row gap-52 my-2 text-gray-500 mx-2">
              <h3>&bull; Carpet</h3>
              <h3 className="mx-4">&bull; Linen Closet</h3>
            </div>
            <div className="antialiased flex flex-row gap-52 text-gray-500 mx-2">
              <h3>&bull; Office</h3>
              <h3 className="mx-6">&bull; Balcony</h3>
            </div>
          </div>
          <h1 className="antialiased text-gray-700 font-semibold text-2xl mb-3 mt-6">
            Lease Details & Fees
          </h1>
          <h2 className="antialiased text-gray-600 font-medium text-xl mb-1">
            Pet Policies
          </h2>
          <div className="mt-3 border h-36 w-8/12 rounded">
            <div className="bg-gray-50 rounded-t">
              <h2 className="mb-3 mx-4 pt-2 pb-2 font-semibold text-gray-500">
                Dogs Allowed
              </h2>
            </div>
            <hr class="ml-7 h-px w-11/12 bg-gray-200 border-0 dark:bg-gray-600" />
            <h2 className="antialiased my-3 mx-4 font-semibold text-gray-900">
              Restrictions:{" "}
              <span className="font-normal">Breed Restrictions</span>
            </h2>
            <div className="flex flex-row font-medium text-gray-600">
              <h2 className="mx-4">Monthly pet rent</h2>
              <h2 className="mx-28">$25</h2>
              <h2 className="relative -mx-7">One time fees</h2>
              <h2 className="mx-32">$400</h2>
            </div>
          </div>
          <div className="border h-28 w-8/12 rounded mt-3">
            <div className="bg-gray-50 rounded-t">
              <h2 className="mb-3 mx-4 pt-2 pb-2 font-semibold text-gray-500">
                Cats Allowed
              </h2>
            </div>
            {/* <h2 className="my-3 mx-4 font-semibold">Cats Allowed</h2> */}
            <hr class="my-3 ml-7 h-px w-11/12 bg-gray-200 border-0 dark:bg-gray-600" />
            <div className="flex flex-row font-medium text-gray-600">
              <h2 className="mx-4">Monthly pet rent</h2>
              <h2 className="mx-28">$25</h2>
              <h2 className="relative -mx-7">One time fees</h2>
              <h2 className="mx-32">$400</h2>
            </div>
          </div>
          <h2 className="mt-7 antialiased text-gray-600 font-medium text-xl mb-1">
            Fees
          </h2>
          <div className="mt-3 border h-40 w-8/12 rounded">
            <div className="bg-gray-50 rounded-t">
              <h2 className="mb-3 mx-4 pt-2 pb-2 font-semibold text-gray-500">
                Parking
              </h2>
            </div>
            <hr class="ml-7 h-px w-11/12 bg-gray-200 border-0 dark:bg-gray-600" />
            <div className="antialiased mt-3 flex flex-col mx-4 font-light">
              <h2 className=" font-medium text-gray-600">
                Surface Lot <span className="ml-36">$50</span>
              </h2>
              <h2 className="mt-1 text-gray-500 text-sm">Unassigned Parking</h2>
              <h2 className="mt-1 text-gray-500 text-sm">
                Rentable parking spot available.
              </h2>
            </div>
          </div>
          <div className="border h-40 w-8/12 rounded mt-3">
            <div className="bg-gray-50 rounded-t">
              <h2 className="mb-3 mx-4 pt-2 pb-2 font-semibold text-gray-500">
                Other Fees
              </h2>
            </div>
            <hr class="ml-7 h-px w-11/12 bg-gray-200 border-0 dark:bg-gray-600" />
            <div className="flex flex-col mt-3">
              <div className="flex flex-row font-medium text-gray-600">
                <h2 className="mx-4">Admin Fee</h2>
                <h2 className="mx-32">$250</h2>
                <h2 className="relative -mx-3">Application Fee</h2>
                <h2 className="mx-28">$75</h2>
              </div>
              <div className="flex flex-row mt-2">
                <hr class="ml-7 h-px w-5/12 bg-gray-200 border-0 dark:bg-gray-600" />
                <hr class="ml-16 h-px w-5/12 bg-gray-200 border-0 dark:bg-gray-600" />
              </div>
              <h2 className="mx-4 font-medium text-gray-600 mt-3">
                Surface Lot <span className="ml-36">$50</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
