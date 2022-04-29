import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";
import { InView, useInView } from "react-intersection-observer";
import ProductSliderComponent from "./productSliderComponent";

export default function DiversidadeComponent() {
  const [ref, inView, entry] = useInView({ threshold: 1 });

  return (
    <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
      {({ inView, ref, entry }) => (
        <Box
          pt="2.5em"
          fontFamily="Montserrat, sans-serif"
          className={inView ? "content" : "content-hidden"}
          ref={ref}
        >
          <Center>
            <Heading
              fontFamily="Sunflower"
              fontWeight="500"
              fontSize="6xl"
              color="#021e43"
            >
              A diversidade em marca!
            </Heading>
          </Center>
          <Flex mt="2.5em">
            <Spacer />
            <ProductSliderComponent />
            <Spacer />
          </Flex>
        </Box>
      )}
    </InView>
  );
}
