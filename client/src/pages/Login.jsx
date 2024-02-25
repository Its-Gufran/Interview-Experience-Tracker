import React from "react";
import loginImg from "../files/login.png";
const Login = () => {
  return (
    <div className="flex flex-col-reverse gap-10 p-5 md:flex-row md:items-center md:p-10  ">
      <div className="flex flex-col gap-5 flex-1 md:items-center">
        <div className="flex flex-col gap-2 text-center">
          <div className="text-2xl font-bold md:text-4xl">Welcome Back!</div>
          <p className="font-medium text-slate-500 md:text-lg">
            Login into the world of interview experiences. Get Started Now!
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <input
            className="px-4 py-2 border-2 rounded-full w-full"
            placeholder="Enter Username"
          />
          <input
            className="px-4 py-2 border-2 rounded-full w-full"
            placeholder="Enter Password"
          />
        </div>
        <button className="px-10 py-2 bg-orange-500 rounded-full text-white font-medium hover:bg-orange-600">
          Login
        </button>
        <div class="flex items-center w-full">
          <div class="flex-1 border-b border-gray-200"></div>
          <div class="mx-4 text-gray-500">Don't have an account ?</div>
          <div class="flex-1 border-b border-gray-200"></div>
        </div>
        <button className="px-10 py-2 border-2 border-orange-100 rounded-full text-orange-500 font-medium hover:bg-orange-500 hover:text-white hover:border-none">
          Register
        </button>
      </div>
      <div className="bg-orange-100 rounded-xl flex-1">
        <img src={loginImg} />
      </div>
    </div>
  );
};

export default Login;
