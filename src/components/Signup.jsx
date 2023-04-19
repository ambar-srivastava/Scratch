import React, { useState } from "react";
import validationBgImg from "../assets/validationBgImg.svg";
import screenImg from "../assets/screenImg.svg";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Storing value in localStorage
  const handleSignUp = (event) => {
    event.preventDefault();
    if (input.email === "" || input.name === "" || input.password === "") {
      alert("Please fill the form correctly");
    } else {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/login");
    }
  };

  return (
    <section className=" relative lg:w-screen lg:h-screen">
      <img
        src={validationBgImg}
        alt="img"
        className=" lg:w-full lg:h-full object-cover"
      />
      <div className="lg:w-full lg:h-full absolute bg-gradient-to-r from-[#FFF] to-[#FFF1] top-0 flex items-center justify-center">
        <div className="lg:w-[60%] lg:h-[65%] bg-white rounded-xl flex overflow-hidden border-none">
          <div className="lg:w-[50%] bg-white relative">
            <img
              src={screenImg}
              alt="img"
              className=" object-cover lg:w-full lg:h-full"
            />
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </Link>
          </div>
          <div className="lg:w-[50%] lg:flex lg:items-center lg:p-20">
            <div className=" lg:h-full lg:w-full lg:flex lg:flex-col lg:justify-center">
              <h3 className="text-[#030F09] lg:font-bold text-4xl">
                Start from Scratch
              </h3>
              <p className=" lg:text-md font-normal text-[#606060] lg:mt-3 lg:mb-16">
                Create account to continue.
              </p>
              <form onSubmit={handleSignUp}>
                <div className=" flex flex-col ">
                  <label
                    htmlFor="name"
                    className="font-normal text-[#A8A8A8] text-lg"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={(event) =>
                      setInput({
                        ...input,
                        [event.target.name]: event.target.value,
                      })
                    }
                    className="border-b border-[#CCCCCC] bg-transparent outline-none mt-3"
                  />
                </div>
                <div className=" flex flex-col mt-8">
                  <label
                    htmlFor="email"
                    className="font-normal text-[#A8A8A8] text-lg"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={input.email}
                    onChange={(event) =>
                      setInput({
                        ...input,
                        [event.target.name]: event.target.value,
                      })
                    }
                    className="border-b border-[#CCCCCC] bg-transparent outline-none mt-3"
                  />
                </div>
                <div className=" flex mt-8 justify-between flex-col">
                  <label
                    htmlFor="password"
                    className="font-normal text-[#A8A8A8] text-lg"
                  >
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={(event) =>
                      setInput({
                        ...input,
                        [event.target.name]: event.target.value,
                      })
                    }
                    className="border-b border-[#CCCCCC] bg-transparent outline-none mt-3"
                  />
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="bg-[#30BE76] text-white p-4 w-full rounded-lg text-lg font-semibold"
                  >
                    Sign UP
                  </button>
                </div>
              </form>
              <p className=" font-normal text-md text-center text-[#A8A8A8] mt-7">
                Already have an account?
              </p>
              <Link to="/login">
                <h5 className="text-[#30BE76] text-xl text-center font-bold ">
                  Login Here
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
