import React from "react";
import { generateDay } from "../helper/generateDate";
import "../index.css";
export const Routine = ({ data, image }) => {
  const today = data[generateDay()];

  return (
    <div className="routine-container">
      {Object.keys(today).map((data) => {
        const tasks =
          data === "Exercise" ? today[data].join(", ") : today[data];
        return (
          <div className="routine-card">
            <img className="routine-image" src={image[data]} alt={image} />
            <h2>{data} </h2>
            <p>{tasks}</p>
          </div>
        );
      })}
    </div>
  );
};
