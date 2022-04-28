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
            fontSize="6xl"
            textAlign="center"
            color="#021E43"
            fontWeight="bold"
            fontFamily="Sunflower"
          >
            {props.title}
          </Text>
          <Center>
            <Image src={sticker} h="40em" />
          </Center>
        </Box>
      </Center>
    </div>
  );
}
