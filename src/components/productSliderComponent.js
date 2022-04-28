import { Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import origem from "../assets/images/latas-08.png";

export default function ProductSliderComponent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="carrossel">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        transitionDuration={2000}
        showDots={true}
        draggable={false}
        arrows={false}
        focusOnSelect={true}
      >
        <Image src={origem} />
        <Image src={origem} />
        <Image src={origem} />
        <Image src={origem} />
      </Carousel>
    </div>
  );
}
