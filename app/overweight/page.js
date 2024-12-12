import React from "react";

const page = () => {
  return (
    <div className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-5 fw-bold">Choose Your Fitness Plan</h1>
        <p className="text-body-secondary">
          Unlock your potential with personalized diet and fitness solutions.
        </p>
      </header>
      <div className="flex justify-center  mt-28">
        <div className="bg-slate-50 shadow-2xl rounded-2xl p-5">
          <h1>
            $5<small>/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>personalized meal plans</li>

            <li>Customized diet plans</li>
            <li>support from dieticians</li>
          </ul>
          <button type="button" className="bg-blue-500 text-white p-2 rounded">
            Choose Elite Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
