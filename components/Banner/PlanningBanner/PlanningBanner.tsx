import { NextCircleIcon } from "@/components/Icon/NextCircleIcon";
import React from "react";
import Banner from "../Banner/Banner";

const PlanningBanner = () => {
  const onPlanningBannerClick = () => {
    console.log("onPlanningBannerClick");
  };

  return (
    <Banner
      backgroundImage="/assets/images/city.jpg"
      backgroundPosition="50% 85%"
      isGreenOverlay
      title="Start Planning"
      description="Auto generate your plan"
      icon={<NextCircleIcon />}
      onClick={onPlanningBannerClick}
    />
  );
};

export default PlanningBanner;
