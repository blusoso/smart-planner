import React from "react";
import Layout from "@/components/Layout/Layout";
import ImageSlider from "@/components/Slider/ImageSlider";

const IMAGES = [
  "/assets/images/sonaal-bangera.jpg",
  "/assets/images/david-gardiner.jpg",
  "/assets/images/colton-duke.jpg",
  "/assets/images/city.jpg",
  "/assets/images/building.jpg",
];

const Place = () => {
  return (
    <>
      <ImageSlider images={IMAGES} />
      <Layout>xxx</Layout>
    </>
  );
};

export default Place;
