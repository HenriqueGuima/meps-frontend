import { Box, Center, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import ImageSlider from "./imageSlider";
import sticker from "../assets/images/Logo_MEPS_sticker.png";

export default function HeroComponent(props) {
  return (
    <div>
      <Center w="100%" color="white">
        <ImageSlider slides={props.slide} />
        <Box position="absolute">
          <Text
            fontSize="7xl"
            textAlign="center"
            color="#021E43"
            fontWeight="regular"
            fontFamily="Sunflower"
          >
            {props.title}
          </Text>
          <Center>
            <Text
              fontSize="3xl"
              textAlign="center"
              color="#021E43"
              fontWeight="bold"
              fontFamily="Montserrat"
            >
              {props.secondTitle}
            </Text>
            {props.logo ? <Image src={sticker} h="40em" /> : null}
          </Center>
        </Box>
      </Center>
    </div>
  );
}
