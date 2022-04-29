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
import { InView, useInView } from "react-intersection-observer";
import logoVertical from "../assets/images/Logo_MEPS_vertical.png";

export default function FooterComponent() {
  const [ref, inView, entry] = useInView({ threshold: 1 });

  return (
    <div>
      <Box>
        {/* FOOTER LINKS */}
        <InView rootMargin="100px 0px -100px 0px" triggerOnce={true}>
          {({ inView, ref, entry }) => (
            <Flex mt="2.5em" ref={ref}>
              <Spacer />
              <Center>
                <Box fontFamily="Montserrat, sans-serif">
                  <Heading
                    fontFamily="Sunflower"
                    fontWeight="200"
                    color="#021e43"
                  >
                    Produtos
                  </Heading>
                  Frutos Secos <br />
                  Legumes Secos <br />
                  Legumes Cozidos <br />
                  Fruta em calda
                </Box>
              </Center>
              <Spacer />
              <Box>
                <Image
                  src={logoVertical}
                  w="30pc"
                  className={
                    inView ? "content-footer" : "content-footer-hidden"
                  }
                />
              </Box>
              <Spacer />
              <Center>
                <Box>
                  <Heading
                    fontFamily="Sunflower"
                    fontWeight="200"
                    color="#021e43"
                  >
                    Contactos
                  </Heading>
                  Rua Taltal nº123 <br />
                  meps@gmail.com
                  <br />
                  Legumes cozidos <br />
                  Fruta em calda
                </Box>{" "}
              </Center>

              <Spacer />
            </Flex>
          )}
        </InView>

        {/* REDES SOCIAIS */}

        <Flex mb="2.5em">
          <Spacer />
          <Center>
            <Container w="100%">
              <i className="fa-brands fa-instagram icon-styles"></i>
            </Container>{" "}
            <Container w="100%">
              <i class="fa-brands fa-facebook-square icon-styles"></i>
            </Container>{" "}
          </Center>
          <Spacer />
        </Flex>
      </Box>

      {/* TERMOS E CONDIÇÕES ETC */}
      <Flex>
        <Center
          bg="#021E43"
          w="100%"
          h="5em"
          color="white"
          pl="2em"
          pr="2em"
          fontFamily="Montserrat, sans-serif"
        >
          <Spacer />
          <Box>Termos e Condições</Box>
          <Spacer />
          <Box>|</Box>
          <Spacer />
          <Box>Política de Privacidade</Box>
          <Spacer />
          <Box>|</Box>
          <Spacer />
          <Box>Coloured by Design Station</Box>
          <Spacer />
        </Center>
      </Flex>
    </div>
  );
}
