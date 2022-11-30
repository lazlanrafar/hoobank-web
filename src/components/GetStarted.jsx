import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className="flex">
          <p className="font-poppins font-medium text-lg leading-6 mr-1">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow up"
            className="w-6 h-6 object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-lg leading-6">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}
