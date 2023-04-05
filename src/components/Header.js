import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Logo2.jpeg";

const Header = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `GPT`;
    navigate(path);
  };

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center px-0">
        {/*logo*/}
        <Link to="/">
          <img src={Logo} alt="" className="w-96"></img>
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          {/* <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to=""
          >
            GPT Powered Help Desk
          </Link> */}

          <button
            onClick={routeChange}
            class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-zinc-700 transition-all hover:bg-zinc-700/10 active:bg-zinc-700/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            GPT Powered Help Desk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
