import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import ProductSliderComponent from "./productSliderComponent";

export default function ProdutosComponent(props) {
  const [ref, inView, entry] = useInView({ threshold: 1 });

  return (
    <div>
      <Container maxW={props.width}>
        <Box
          pt="0em"
          mt="4em"
          fontFamily="Montserrat, sans-serif"
          className={InView ? "content" : "content-hidden"}
          ref={ref}
          style={{ justifyContent: "flex-start" }}
        >
          <Box>
            <Heading
              className="tipoProdutos"
              fontFamily="Montserrat, sans-serif"
              fontWeight="500"
              // fontSize="5xl"
              color="#021e43"
              textAlign="start"
            >
              {props.title}
            </Heading>
          </Box>
        </Box>
      </Container>
      <Flex mt="2.5em">
        <Spacer />
        <ProductSliderComponent />
        <Spacer />
      </Flex>
    </div>
  );
}
