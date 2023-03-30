import React from "react";

const AboutCard = ({ Icon, text, heading }) => {
  return (
    <div className="border border-gray-400 rounded-xl text-white space-y-3 px-6 py-8">
      <span className="inline-flex p-3 rounded-full text-black bg-[#00d8ff]">
        <Icon size={29} />
      </span>
      <h3 className="font-bold pr-4">{heading}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default AboutCard;
