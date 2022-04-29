import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import historia from "../assets/images/2-historia.png";
import origem from "../assets/images/3-origem.png";
import ProductSliderComponent from "./productSliderComponent";
import pratoUm from "../assets/images/pratos-10.png";
import pratoDois from "../assets/images/pratos-11.png";
import pratoTres from "../assets/images/pratos-12.png";
import { InView, useInView } from "react-intersection-observer";
import trigo from "../assets/images/trigo.png";
import ervilhas from "../assets/images/ervilhas.png";
import lentilhas from "../assets/images/lentilhas.png";
import tomatinhos from "../assets/images/tomatinhos.png";
import grao from "../assets/images/grao.png";
import tomate from "../assets/images/tomate.png";

export default function HistoriaContentComponent() {
  const [ref, inView, entry] = useInView({ threshold: 1 });

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

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
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 200;
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
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 120;
      textPath.setAttribute("startOffset", -percent * 40 + 2500);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Box w="100%" className="ondas">
        <svg
          id="Camada_1"
          data-name="Camada 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="20 120 1950.93 326.31"
          // style={{
          //   transform: "scaleY(-1)",
          // }}
        >
          <defs></defs>
          <path
            class="cls-1"
            id="text-path"
            d="M0,124.81c2.8,6.06,502.31,99.94,741.14,91.15,323-11.89,741.13-148.62,1209.79-79.26"
            // stroke="#00f"
            stroke-width="1px"
            fill="transparent"
            style={{
              transform: "translateY(95px)",
            }}
          />
          <text x="100%">
            <textPath
              href="#text-path"
              id="text-path-path"
              fontFamily="Sunflower"
              fill="white"
            >
              Desde 1960 consigo...
            </textPath>
          </text>
        </svg>
      </Box>
      {/* ROTATING TEXT */}
      <Box className="rotativo">
        <svg viewBox="0 0 500 500" style={{ width: "100%" }}>
          <title>Uma frase que não sei</title>
          <defs>
            <path
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
              id="textcircle"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="30s"
                type="rotate"
                from="0 250 250"
                to="360 250 250"
                repeatCount="indefinite"
              />
            </path>
          </defs>
          <text dy="15" textLength="1270">
            <textPath
              href="#textcircle"
              style={{
                fontSize: "63px",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                letterSpacing: "20px",
                fill: "#111",
                background: "#333",
              }}
            >
              uma frase que não sei neste momento •
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
                <Heading fontSize="1.8rem">A NOSSA HISTÓRIA</Heading>
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

      <Box>
        <Image
          src={trigo}
          className="trigo"
          style={{ transform: `translateY(${offsetY * 0.05}px)` }}
        />
      </Box>

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
                    lectus, in tincidunt orci laoreet ut. Pellentesque orci
                    odio, scelerisque eget augue in, ultrices rhoncus nibh.
                    Donec ac fermentum arcu.{""}
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

      <Box>
        <Image
          src={ervilhas}
          className="ervilhas"
          style={{ transform: `translateY(${offsetY * 0.07}px)` }}
        />
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
      <Box
        bg="#021E43"
        w="100%"
        mt="5em"
        pt="2.5em"
        pb="5em"
        fontFamily="Montserrat, sans-serif"
      >
        <Box w="100%" className="ondas">
          <svg
            id="Camada_1"
            data-name="Camada 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="20 100 1950.93 326.31"
          >
            <defs></defs>
            <path
              class="cls-1"
              id="text-path"
              d="M0,124.81c2.8,6.06,502.31,99.94,741.14,91.15,323-11.89,741.13-148.62,1209.79-79.26"
              // stroke="#00f"
              stroke-width="1px"
              fill="transparent"
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
        </Box>

        <Box>
          <Image
            src={tomate}
            className="tomate"
            style={{ transform: `translateY(${offsetY * 0.03}px)` }}
          />
        </Box>

        <Box>
          <Image
            src={lentilhas}
            className="lentilhas"
            style={{ transform: `translateY(${offsetY * 0.07}px)` }}
          />
        </Box>
        {/* PRATOS */}

        <Flex mt="2.5em">
          <Spacer />
          <Center>
            <Box>
              <Image
                src={tomatinhos}
                className="tomatinhos"
                style={{ transform: `translateY(${offsetY * 0.07}px)` }}
              />
            </Box>
            <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
              {({ inView, ref, entry }) => (
                <Image
                  src={pratoDois}
                  w="300px"
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
                  w="550px"
                  id="prato"
                  className={inView ? "content-prato3" : "content-hidden"}
                  ref={ref}
                />
              )}
            </InView>
          </Center>{" "}
          <Spacer />
          <Center>
            <Box>
              <Image
                src={grao}
                className="grao"
                style={{ transform: `translateY(${offsetY * 0.07}px)` }}
              />
            </Box>
            <Box>
              <Image
                src={grao}
                className="grao2"
                style={{ transform: `translateY(${offsetY * 0.04}px)` }}
              />
            </Box>
            <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
              {({ inView, ref, entry }) => (
                <Image
                  src={pratoTres}
                  w="280px"
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
