import React from "react";
import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full top-[90px]">
      <video
        src={heroVid}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white space-y-4 text-center px-2">
        <h2 className="text-4xl font-extrabold">Decentralized</h2>
        <h2 className="text-4xl font-extrabold">
          <span className="text-[#00d8ff]">Trending</span> Protocol
        </h2>
        <p className="max-w-xl text-xl mx-auto">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className="p-0 py-2 px-6 capitalize text-lg">use deli</button>
          <button className="p-0 py-2 px-6 text-lg uppercase from-transparent border border-slate-50 to-transparent">
            faq
          </button>
        </div>
        <div className="absolute w-full text-lg -bottom-full font-bold">
          <p className="mb-20">Total Volume Secured: $42,104,783,662.47</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
