import React from "react";
import { generateDay } from "../helper/generateDate";
import "../index.css";
export const Routine = ({ data }) => {
  const today = data[generateDay()];

  return (
    <div className="routine-container">
      {Object.keys(today).map((data) => {
        const tasks =
          data === "Exercise" ? today[data].join(", ") : today[data];
        return (
          <div className="routine-card">
            <h2>{data}</h2>
            <p>{tasks}</p>
          </div>
        );
      })}
    </div>
  );
};
