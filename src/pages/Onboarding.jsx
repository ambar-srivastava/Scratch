import React from "react";
import bgImage from "../assets/bgImage.svg";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <section className=" w-screen h-screen bg-white relative">
      <img
        src={bgImage}
        alt="bgimg"
        className=" object-cover h-[95%] absolute right-0 lg:w-[63%]"
      />
      <div className=" px-28 py-16 bg-white ">
        <img src={logo} alt="logo" width={100} />
        <h1 className="text-5xl mt-24 z-50">
          Join over 50 millions people <br /> sharing recipes everyday
        </h1>
        <p className=" font-normal text-md mt-4 text-[#606060]">
          Never run out of ideas again. Try new foods, ingredients, cooking
          style, and more
        </p>
        <div className=" flex gap-5 flex-wrap mt-10  font-bold text-lg">
          <Link to="/todo">
            <button
              type="button"
              className="bg-[#30BE76] border-2 border-[#30BE76] tracking-wide rounded-lg py-4 px-20 text-white"
            >
              Todo List
            </button>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="border-2 border-[#30BE76] rounded-lg py-4 px-20 tracking-wide text-[#30BE76]"
          >
            Log Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
