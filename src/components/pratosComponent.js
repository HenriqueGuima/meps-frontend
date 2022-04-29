import { Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import lentilhas from "../assets/images/lentilhas.png";
import tomatinhos from "../assets/images/tomatinhos.png";
import grao from "../assets/images/grao.png";
import tomate from "../assets/images/tomate.png";
import pratoUm from "../assets/images/pratos-10.png";
import pratoDois from "../assets/images/pratos-11.png";
import pratoTres from "../assets/images/pratos-12.png";

export default function PratosComponent() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

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
  );
}
