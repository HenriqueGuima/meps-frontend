import { Box, Container, Flex, Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { Suspense, useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import OndasTopComponent from "./ondasTopComponent";
import ApenasOndaComponent from "./apenasOndaComponent";
import ProdutosComponent from "./produtosComponent";
import grao from "../assets/images/grao.png";
import lentilhas from "../assets/images/lentilhas.png";
import tomate from "../assets/images/tomate.png";
import trigo from "../assets/images/trigo.png";

export default function ProdutosContentComponent() {
  //MOVES TEXT ALONG THE PATH

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [ref, inView, entry] = useInView({ threshold: 1 });

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
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 120;
      textPath.setAttribute("startOffset", -percent * 40 + 3000);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <Box w="100%">
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
              A qualidade embalada...
            </textPath>
          </text>
        </svg>
      </Box> */}

      {/* ONDA */}
      <InView>
        {({ inView, ref, entry }) => (
          <Suspense fallback={<div>LOADING...</div>}>
            {inView ? (
              <div></div>
            ) : (
              <OndasTopComponent frase="A qualidade embalada..." ref={ref} />
            )}
          </Suspense>
        )}
      </InView>

      {/* Produtos */}
      <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <Box className={inView ? "content" : "content-hidden"} ref={ref}>
            <Flex>
              <Spacer />
              <Box w="7em" />
              <div class="hover12">
                <Flex>
                  <Spacer />
                  <Box w="7em" />
                  <Box>
                    <figure>
                      <span className="inText">Leguminosas</span>
                      <Image
                        src="https://picsum.photos/300/200?image=244"
                        id="produto-img"
                      />
                    </figure>
                  </Box>
                  <Spacer />
                  <Box w="7em" />
                  <Box>
                    <figure>
                      <span className="inText">Frutas</span>
                      <Image
                        src="https://picsum.photos/300/200?image=1024"
                        id="produto-img"
                      />
                    </figure>
                  </Box>
                  <Spacer />
                  <Box w="7em" />
                  <Box>
                    <figure>
                      <span className="inText">Ervilhas</span>
                      <Image
                        src="https://picsum.photos/300/200?image=611"
                        id="produto-img"
                      />
                    </figure>
                  </Box>
                  <Spacer />
                  <Box w="7em" />
                </Flex>
              </div>

              <Spacer />
            </Flex>
          </Box>
        )}
      </InView>

      {/* ONDA */}
      <InView>
        {({ inView, ref, entry }) => (
          <Suspense fallback={<div>LOADING...</div>}>
            {inView ? <div></div> : <ApenasOndaComponent ref={ref} />}
          </Suspense>
        )}
      </InView>

      {/* Produtos */}
      <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <Container className="tipoProdutosComponent">
            <Box>
              <Image
                src={grao}
                className="grao3"
                style={{ transform: `translateY(${offsetY * 0.04}px)` }}
              />
              <Box>
                <Image
                  src={tomate}
                  className="tomate2"
                  style={{ transform: `translateY(${offsetY * 0.03}px)` }}
                />
              </Box>

              <Box>
                <Image
                  src={lentilhas}
                  className="lentilhas2"
                  style={{ transform: `translateY(${offsetY * 0.07}px)` }}
                />
              </Box>

              <Box>
                <Image
                  src={trigo}
                  className="trigo2"
                  style={{ transform: `translateY(${offsetY * 0.02}px)` }}
                />
              </Box>
            </Box>
            <ProdutosComponent width="33ch" title="Leguminosas" />
            <ProdutosComponent width="23ch" title="Vegetais" />
            <ProdutosComponent width="18ch" title="Frutas" />
            <ProdutosComponent width="28ch" title="Preparados" />
          </Container>
        )}
      </InView>

      {/* ONDA */}
      <InView>
        {({ inView, ref, entry }) => (
          <Suspense fallback={<div>LOADING...</div>}>
            {inView ? (
              <div></div>
            ) : (
              <Box w="100%" className="ondas" mt="10">
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
                      Receitas Deliciosas...
                    </textPath>
                  </text>
                </svg>
              </Box>
            )}
          </Suspense>
        )}
      </InView>

      {/* Produtos */}
      <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <Box className={inView ? "content" : "content-hidden"} ref={ref}>
            <Flex>
              <Spacer />
              <Box w="7em" />
              <div class="hover12">
                <Flex>
                  <Spacer />
                  <Box w="7em" />
                  <Box>
                    <figure>
                      <span className="inText">Leguminosas</span>
                      <Image
                        src="https://picsum.photos/300/200?image=244"
                        id="produto-img"
                      />
                    </figure>
                  </Box>
                  <Spacer />
                  <Box w="7em" />
                  <Box>
                    <figure>
                      <span className="inText">Frutas</span>
                      <Image
                        src="https://picsum.photos/300/200?image=1024"
                        id="produto-img"
                      />
                    </figure>
                  </Box>
                  <Spacer />
                  <Box w="7em" />
                  <Box>
                    <figure>
                      <span className="inText">Ervilhas</span>
                      <Image
                        src="https://picsum.photos/300/200?image=611"
                        id="produto-img"
                      />
                    </figure>
                  </Box>
                  <Spacer />
                  <Box w="7em" />
                </Flex>
              </div>

              <Spacer />
            </Flex>
          </Box>
        )}
      </InView>
    </div>
  );
}
