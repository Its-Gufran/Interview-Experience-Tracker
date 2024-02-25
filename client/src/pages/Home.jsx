import React from "react";
import landingImage from "../files/header.png";
import Button from "../components/simple/Button";
import Icon1 from "../files/icon1.png";
import Icon2 from "../files/icon2.png";
import Icon3 from "../files/icon3.png";
import Collage from "../files/collage.svg";

const Home = () => {
  return (
    <div className="m-5 lg:m-16 flex flex-col gap-20">
      <div className="flex gap-3 lg:gap-20 items-center flex-col-reverse md:flex-row">
        <div className="text-4xl lg:text-6xl heading font-extrabold text-center md:text-start flex flex-col gap-4 md:items-start">
          <div className=" bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent">
            Direct from Students
          </div>
          <div className="mt-[-10px]">
            Real Experiences from College Interviews
          </div>
          <div className="text-sm lg:text-lg font-normal  text-slate-500">
            Get expert tips, strategies, sample questions, and real interview
            experiences submitted by students who have gone through the process
            at schools across the country. Know what to expect, how to prepare,
            and hear directly from other students who sat in the hot seat before
            their college admission.
          </div>
          <button className="text-sm bg-blue-500 font-medium px-8 py-4 text-white hover:bg-blue-600 rounded-md">
            Get Started
          </button>
        </div>
        <img src={landingImage} className="w-5/5 md:w-2/5 " />
      </div>
      <div className="bg-slate-100 px-3 md:px-6 py-10 lg:py-20 ">
        <h1 className="text-center font-bold text-3xl lg:text-6xl text-slate-400 pb-14">
          Features.
        </h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-50 shadow-md rounded-md hover:bg-orange-200">
            <div className="flex flex-col gap-4 p-4 lg:p-8 content-center">
              <div className=" bg-yellow-100 text-center flex items-center justify-center h-16 w-16 rounded-full p-3 ">
                <img src={Icon1} />
              </div>
              <div className="text-2xl font-bold ">
                Real Interview Experiences
              </div>
              <p className="text-gray-500">
                Allow students to submit their own interview experiences,
                including the questions they were asked and how they responded.
                This can provide valuable insight into what to expect during the
                interview process.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-50 shadow-md rounded-md hover:bg-blue-200">
            <div className="flex flex-col gap-4 p-4 lg:p-8">
              <div className=" bg-blue-100 text-center flex items-center justify-center h-16 w-16 rounded-full p-3 ">
                <img src={Icon2} />
              </div>
              <div className="text-2xl font-bold">
                Search and Filter Functionality
              </div>
              <p className="text-slate-500">
                Implement search and filter options so users can easily find
                relevant information based on their interests, school
                preferences, or interview type.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-50 shadow-md rounded-md hover:bg-green-200">
            <div className="flex flex-col gap-4 p-4 lg:p-8">
              <div className=" bg-green-100 text-center flex items-center justify-center h-16 w-16 rounded-full p-3 ">
                <img src={Icon3} />
              </div>
              <div className="text-2xl font-bold">
                Discussion Forums or Q&A Section
              </div>
              <p className="text-slate-500">
                Provide a platform for users to ask questions, share advice, and
                engage in discussions related to college interviews. This can
                foster a sense of community and support among users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div>
        <div className="text-center font-bold text-3xl lg:text-6xl text-slate-400 pb-20 lg:my-10">
          Add your college.
        </div>
        <div className="flex flex-col gap-10 md:flex-row items-center">
          <div className="w-full">
            <img src={Collage} />
          </div>
          <div className="flex flex-col gap-4 text-center md:text-end md:items-end items-center">
            <div className="text-3xl font-bold md:text-4xl lg:text-5xl ">
              Is your college missing? Share your interview experiences and help
              others!
            </div>
            <p className=" text-slate-400 md:text-lg">
              Once a college is added, it will have its dedicated section on the
              website where users can view and add interview experiences
              specific to that college.
            </p>
            <button className="text-sm bg-blue-500 font-medium px-8 py-4 text-white hover:bg-blue-600 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
