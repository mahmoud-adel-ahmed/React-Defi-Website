import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center max-w-full">
      <h1>Join Our DeFi Community</h1>
      <div className="py-4 space-y-2 flex justify-center items-center flex-wrap gap-2">
        <input
          className="p-2 rounded-3xl mr-4"
          type="email"
          placeholder="Enter your email"
        />
        <button className="ml-0" style={{ margin: 0 }}>
          Sign Up
        </button>
      </div>
      <div className="flex items-center justify-center py-2 gap-2">
        <input className="sm:mr-2 self-center" type="checkbox" />
        <p>Yes, I agree to receive email communications from DeFi.</p>
      </div>
    </div>
  );
};

export default Subscribe;
