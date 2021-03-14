import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={1038}
      naturalSlideHeight={279}
      totalSlides={3}
      isPlaying="true"
      interval="2000"
      style={{ cursor: "pointer" }}
    >
      <Slider>
        <Slide index={0}>
          <img
            width="100%"
            src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </Slide>
        <Slide index={1}>
          <img
            width="100%"
            src="https://image.shutterstock.com/image-illustration/2d-illustration-binary-coding-abstract-260nw-1706307478.jpg"
            alt=""
          />
        </Slide>
        <Slide index={2}>
          <img
            width="100%"
            src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default Carousel