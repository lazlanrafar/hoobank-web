import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

export default function Billing() {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="h-full w-full relative z-[5]"
          loading="lazy"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="#" className="mr-3">
            <img
              src={apple}
              alt="apple_store"
              className="w-[128px] h-[42px]"
              loading="lazy"
            />
          </a>
          <a href="#" className="">
            <img
              src={google}
              alt="google_play_store"
              className="w-[128px] h-[42px]"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
