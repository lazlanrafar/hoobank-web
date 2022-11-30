import React from "react";
import { stats } from "../constants";
import styles from "../style";

export default function Stats() {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`font-poppins text-white flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-semibold xs:text-4xl xs:leading-[53px] text-3xl leading-[43px]">
            {stat.value}
          </h4>
          <p className="font-normal xs:text-2xl xs:leading-[26px] text-xl leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}
