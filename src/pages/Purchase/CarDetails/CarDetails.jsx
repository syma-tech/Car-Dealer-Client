import React from "react";
import Features from "../Features/Features";
import { Link } from "react-router-dom";

const CarDetails = ({ image, big_description }) => {
  return (
    <div className="card w-full bg-base-100">
      <figure className="px-0 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="space-y-7 mt-7">
        <h2 className="card-title text-3xl">Car descriptions</h2>
        <p className="text-justify text-xl">{big_description}</p>
        <div className="card-actions">
          <Link className="mb-8 text-2xl" to="/explore">
            View More
          </Link>
        </div>
        <div>
          <Features />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
