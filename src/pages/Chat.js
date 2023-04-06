import React, { useContext } from "react";
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
