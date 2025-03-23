import React from "react";

const ResumeCards = ({ title, description, type, comp }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-gray-500">
      {/* Left Side: Title and Description */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>

      {/* Right Side: EvervaultCard */}
      <div className="mt-4 md:mt-0 md:ml-6">{comp}</div>
    </div>
  );
};

export default ResumeCards;
