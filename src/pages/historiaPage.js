import { Container } from "@chakra-ui/layout";
import React, { lazy, Suspense } from "react";
import { InView, useInView } from "react-intersection-observer";
import FooterComponent from "../components/footerComponent";
// import HeroComponent from "../components/heroComponent";
import HistoriaContentComponent from "../components/historiaContentComponent";
import { SlideDataHistoria } from "../components/slideDataHistoria";
const HeaderComponent = lazy(() => import("../components/headerComponent"));
const HeroComponent = lazy(() => import("../components/heroComponent"));

export default function HistoriaPage() {
  const [ref, inView, entry] = useInView({ threshold: 0 });

  return (
    <div>
      <InView>
        {({ inView, ref, entry }) => (
          <Suspense fallback={<Container>LOADING HEADER...</Container>}>
            {inView ? <div></div> : <HeaderComponent ref={ref} />}
          </Suspense>
        )}
      </InView>

      <InView>
        {({ inView, ref, entry }) => (
          <Suspense fallback={<Container h="900">LOADING HEADER...</Container>}>
            {inView ? (
              <div></div>
            ) : (
              <HeroComponent
                title="Uma nova cara... a qualidade de sempre!"
                slide={SlideDataHistoria}
                logo={true}
                ref={ref}
              />
            )}
          </Suspense>
        )}
      </InView>

      <HistoriaContentComponent />
      <FooterComponent />
    </div>
  );
}
