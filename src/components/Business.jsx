import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

export default function Business() {
  const FeatureCard = ({ icon, title, content, isLast }) => {
    return (
      <div
        className={`flex items-start ss:items-center p-6 rounded-[20px] ${
          !isLast && "mb-6"
        } feature-card`}
      >
        <div
          className={`w-[50px] ss:w-[64px] h-[50px] ss:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
          <img
            src={icon}
            alt="icon"
            className="w-1/2 h-1/2 object-contain"
            loading="lazy"
          />
        </div>
        <div className="ml-5 flex-1 font-poppins text-white">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className={`${styles.paragraph} text-base`}>{content}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" text="Get Started" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            isLast={index == features.length - 1 ? true : false}
          />
        ))}
      </div>
    </section>
  );
}
