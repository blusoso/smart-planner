import React from "react";
import { ArrowButton, FullBackground } from "./ImageSlider.styled";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ArrowIosForward from "../Icon/ArrowIosForward";

export type ImageSliderProps = {
  images: string[];
  height?: string;
};

const ImageSlider = ({ images, height }: ImageSliderProps) => {
  return (
    <>
      <Splide
        aria-label="My Favorite Images"
        hasTrack={false}
        options={{
          rewind: true,
        }}
      >
        <SplideTrack>
          {images.map((img, index) => (
            <SplideSlide key={`img-slider--${index}`}>
              <FullBackground img={img} height={height} />
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows">
          <ArrowButton className="splide__arrow splide__arrow--prev">
            <ArrowIosForward />
          </ArrowButton>
          <ArrowButton className="splide__arrow splide__arrow--next">
            <ArrowIosForward />
          </ArrowButton>
        </div>
      </Splide>
    </>
  );
};

export default ImageSlider;
