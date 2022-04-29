import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import historia from "../assets/images/2-historia.png";
import origem from "../assets/images/3-origem.png";
import ProductSliderComponent from "./productSliderComponent";
import pratoUm from "../assets/images/pratos-10.png";
import pratoDois from "../assets/images/pratos-11.png";
import pratoTres from "../assets/images/pratos-12.png";
import { InView, useInView } from "react-intersection-observer";

export default function HistoriaContentComponent() {
  //MOVES TEXT ALONG THE PATH

  useEffect(() => {
    const textPath = document.querySelector("#text-path-path");
    console.log(textPath);
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    document.addEventListener("scroll", (e) => {
      let percent =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
      textPath.setAttribute("startOffset", -percent * 40 + 250);
    });
  }, []);

  useEffect(() => {
    const textPath = document.querySelector("#text-path-path-bottom");
    console.log(textPath);
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    document.addEventListener("scroll", (e) => {
      let percent =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
      textPath.setAttribute("startOffset", -percent * 40 + 2500);
    });
  }, []);

  const [ref, inView, entry] = useInView({ threshold: 1 });

  return (
    <div>
      <Box w="100%">
        <svg
          id="Camada_1"
          data-name="Camada 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="170 120 1361.01 195.01"
        >
          <defs></defs>
          <path
            class="cls-1"
            id="text-path"
            d="M0,269.94l113.55-28.45c6.34-1.59,56.63-14,63.07-15.14,61.51-11.12,391.1-68.74,555.6-56.94,50.73,3.64,104.29,10.82,161,18.43,153.65,20.61,343.39,46.07,633.33,25.5a445.36,445.36,0,0,0,111-22c18.53-6.25,37.62-14.07,53.51-23.53"
            // stroke="#00f"
            stroke-width="1px"
            fill="white"
          />
          <text x="100%">
            <textPath
              href="#text-path"
              id="text-path-path"
              fontFamily="Sunflower"
            >
              Desde 1960 consigo...
            </textPath>
          </text>
        </svg>
      </Box>

      {/* HISTORIA */}
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
                <Heading>A NOSSA HISTÓRIA</Heading>
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
                  fermentum arcu.
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

      {/* DO CAMPO PARA A MESA */}
      <Box bg="#021E43" w="100%" mt="5em" pt="2.5em">
        <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
          {({ inView, ref, entry }) => (
            <Box className={inView ? "content" : "content-hidden"} ref={ref}>
              <Center>
                <Heading
                  color="white"
                  fontFamily="Sunflower"
                  fontWeight="500"
                  fontSize="5xl"
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
                  <Heading>A ORIGEM</Heading>
                  <Box mt="1em">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse consequat vestibulum odio. Donec felis tellus,
                    bibendum nec cursus vitae, varius ut lacus. Sed mattis nibh
                    vitae dui placerat, sed egestas sapien gravida. Suspendisse
                    vitae libero velit. Aenean ullamcorper fringilla nunc, vitae
                    scelerisque nibh lacinia et. Mauris eget magna quis nisl
                    iaculis vestibulum eget ac dolor. Aliquam interdum tincidunt
                    lectus, in tincidunt orci laoreet ut. Pellentesque orci
                    odio, scelerisque eget augue in, ultrices rhoncus nibh.
                    Donec ac fermentum arcu.
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

      {/* A DIVERSIDADE EM MARCA */}
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
                fontSize="5xl"
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
      <Box
        bg="#021E43"
        w="100%"
        mt="5em"
        pt="2.5em"
        pb="5em"
        fontFamily="Montserrat, sans-serif"
      >
        <svg
          id="Camada_1"
          data-name="Camada 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="170 120 1361.01 195.01"
        >
          <defs></defs>
          <path
            class="cls-1"
            id="text-path"
            d="M0,269.94l113.55-28.45c6.34-1.59,56.63-14,63.07-15.14,61.51-11.12,391.1-68.74,555.6-56.94,50.73,3.64,104.29,10.82,161,18.43,153.65,20.61,343.39,46.07,633.33,25.5a445.36,445.36,0,0,0,111-22c18.53-6.25,37.62-14.07,53.51-23.53"
            // stroke="#00f"
            stroke-width="1px"
            fill="none"
          />
          <text x="100%">
            <textPath
              href="#text-path"
              id="text-path-path-bottom"
              fontFamily="Sunflower"
              fontWeight="500"
              fontSize="5xl"
              color="#021e43"
            >
              Para arregalar os olhos...
            </textPath>
          </text>
        </svg>
        {/* PRATOS */}

        <Flex mt="2.5em">
          <Spacer />
          <Center>
            <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
              {({ inView, ref, entry }) => (
                <Image
                  src={pratoDois}
                  w="400px"
                  id="prato"
                  className={inView ? "content-prato1" : "content-hidden"}
                  ref={ref}
                />
              )}
            </InView>
          </Center>{" "}
          <Spacer />
          <Center>
            <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
              {({ inView, ref, entry }) => (
                <Image
                  src={pratoUm}
                  w="650px"
                  id="prato"
                  className={inView ? "content-prato3" : "content-hidden"}
                  ref={ref}
                />
              )}
            </InView>
          </Center>{" "}
          <Spacer />
          <Center>
            <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
              {({ inView, ref, entry }) => (
                <Image
                  src={pratoTres}
                  w="380px"
                  id="prato"
                  className={inView ? "content-prato2" : "content-hidden"}
                  ref={ref}
                />
              )}
            </InView>
          </Center>{" "}
          <Spacer />
        </Flex>
      </Box>
    </div>
  );
}
