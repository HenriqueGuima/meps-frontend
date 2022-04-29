import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import { InView, useInView } from "react-intersection-observer";
import historia from "../assets/images/2-historia.png";

export default function HistoriaComponent() {
  const [ref, inView, entry] = useInView({ threshold: 1 });

  return (
    <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
      {({ inView, ref, entry }) => (
        <Box className={inView ? "content" : "content-hidden"}>
          <Flex>
            <Spacer />
            <Container
              fontSize="2xl"
              noOfLines={[1, 2, 3]}
              fontFamily="Montserrat, sans-serif"
              ref={ref}
              id="content"
            >
              <Heading fontSize="1.8rem">A NOSSA HISTÓRIA</Heading>
              <Box mt="1em">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse consequat vestibulum odio. Donec felis tellus,
                bibendum nec cursus vitae, varius ut lacus. Sed mattis nibh
                vitae dui placerat, sed egestas sapien gravida. Suspendisse
                vitae libero velit. Aenean ullamcorper fringilla nunc, vitae
                scelerisque nibh lacinia et. Mauris eget magna quis nisl iaculis
                vestibulum eget ac dolor. Aliquam interdum tincidunt lectus, in
                tincidunt orci laoreet ut. Pellentesque orci odio, scelerisque
                eget augue in, ultrices rhoncus nibh. Donec ac fermentum arcu.
              </Box>
            </Container>
            <Box w="7em" />
            <Container>
              <Image src={historia} />
            </Container>{" "}
            <Spacer />
          </Flex>
        </Box>
      )}
    </InView>
  );
}
