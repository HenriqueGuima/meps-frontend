import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import { InView } from "react-intersection-observer";
import origem from "../assets/images/3-origem.png";

export default function CampoMesaComponent() {
  return (
    <Box bg="#021E43" w="100%" mt="5em" pt="2.5em">
      <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <Box className={inView ? "content" : "content-hidden"} ref={ref}>
            <Center>
              <Heading
                color="white"
                fontFamily="Sunflower"
                fontWeight="500"
                fontSize="6xl"
              >
                Do campo para a mesa
              </Heading>
            </Center>
            <Flex mt="2.5em">
              <Spacer />
              <Container
                fontSize="2xl"
                color="white"
                fontFamily="Montserrat, sans-serif"
              >
                <Heading fontSize="1.8rem">A ORIGEM</Heading>
                <Box mt="1em">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse consequat vestibulum odio. Donec felis tellus,
                  bibendum nec cursus vitae, varius ut lacus. Sed mattis nibh
                  vitae dui placerat, sed egestas sapien gravida. Suspendisse
                  vitae libero velit. Aenean ullamcorper fringilla nunc, vitae
                  scelerisque nibh lacinia et. Mauris eget magna quis nisl
                  iaculis vestibulum eget ac dolor. Aliquam interdum tincidunt
                  lectus, in tincidunt orci laoreet ut. Pellentesque orci odio,
                  scelerisque eget augue in, ultrices rhoncus nibh. Donec ac
                  fermentum arcu.{""}
                </Box>
                <Box mt="1em" mb="2.5em">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse consequat vestibulum odio. Donec felis tellus,
                  bibendum nec cursus vitae, varius ut lacus. Sed mattis nibh
                  vitae dui placerat, sed egestas sapien gravida. Suspendisse
                  vitae libero velit.
                </Box>
              </Container>
              <Box w="7em" />
              <Container>
                <Image src={origem} />
              </Container>{" "}
              <Spacer />
            </Flex>
          </Box>
        )}
      </InView>
    </Box>
  );
}
