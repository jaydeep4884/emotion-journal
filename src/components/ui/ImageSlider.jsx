import React from "react";
import { Carousel } from "antd";

import Slider1 from "../img/sliderImg/slider-img-01.jpg";
import Slider2 from "../img/sliderImg/slider-img-02.jpg";
import Slider3 from "../img/sliderImg/slider-img-03.jpg";
import Slider4 from "../img/sliderImg/slider-img-04.jpg";
import Slider5 from "../img/sliderImg/slider-img-05.jpg";
import PageContainer from "../layout/PageContainer";

const contentStyle = {
  height: "384px",
  width: "100%",
  objectFit: "cover",
  borderRadius: "12px",
};

const slides = [Slider1, Slider2, Slider3, Slider4, Slider5];

const ImageSlider = () => (
  <PageContainer>
    <Carousel autoplay effect="fade" dots={false}>
      {slides.map((src, index) => (
        <div key={index} className="flex justify-center">
          <img src={src} alt={`Slide ${index + 1}`} style={contentStyle} />
        </div>
      ))}
    </Carousel>
  </PageContainer>
);

export default ImageSlider;
