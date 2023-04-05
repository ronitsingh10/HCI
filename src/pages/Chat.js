import React, { useContext } from "react";
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";
import PropertyCard from "../components/PropertyCard";
import { HouseContext } from "../components/HouseContext";
import ChatGPT from "../components/chatGPT";

const Chat = () => {
  const { houses, loading } = useContext(HouseContext);

  return (
    <div className="">
      <ChatGPT />
    </div>
  );
};

export default Chat;
