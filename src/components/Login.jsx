import React, { useState } from "react";
import validationBgImg from "../assets/validationBgImg.svg";
import screenImg from "../assets/screenImg.svg";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedInUser.email &&
      input.password === loggedInUser.password
    ) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } else {
      alert("wrong email or password");
    }
  };

  return (
    <section className=" relative w-screen h-screen">
      <img
        src={validationBgImg}
        alt="img"
        className=" w-full h-full object-cover"
      />
      <div className="w-full h-full absolute bg-gradient-to-r from-[#FFF] to-[#FFF1] top-0 flex items-center justify-center">
        <div className="w-[60%] h-[65%] bg-white rounded-xl flex overflow-hidden border-none">
          <div className="w-[50%] bg-white relative">
            <img
              src={screenImg}
              alt="img"
              className=" object-cover w-full h-full"
            />
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </Link>
          </div>
          <div className="w-[50%] flex items-center p-20 px-24">
            <div className=" h-full w-full flex flex-col justify-center">
              <h3 className="text-[#030F09] font-bold text-4xl">
                Welcome Back!
              </h3>
              <p className=" text-md font-normal text-[#606060] mt-3 mb-16">
                Please login to continue.
              </p>
              <form onSubmit={handleLogin}>
                <div className=" flex flex-col ">
                  <label
                    htmlFor="email"
                    className="font-normal text-[#A8A8A8] text-lg"
                  >
                    Email address
                  </label>
                  <input
                    required
                    type="email"
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
                  <p className=" text-right text-[#606060] text-lg -mb-5">
                    Forgot password?
                  </p>
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
                    Login
                  </button>
                </div>
                <p className=" font-normal text-md text-center text-[#A8A8A8] mt-7">
                  New to Scratch?
                </p>
                <Link to="/signup">
                  <h5 className="text-[#30BE76] text-xl text-center font-bold ">
                    Create Account Here
                  </h5>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
