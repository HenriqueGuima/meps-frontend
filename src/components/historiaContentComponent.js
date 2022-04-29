import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import trigo from "../assets/images/trigo.png";
import ervilhas from "../assets/images/ervilhas.png";
const OndasTopComponent = lazy(() => import("./ondasTopComponent"));
const RotatingTextComponent = lazy(() => import("./rotatingTextComponent"));
const HistoriaComponent = lazy(() => import("./historiaComponent"));
const CampoMesaComponent = lazy(() => import("./campoMesaComponent"));
const DiversidadeComponent = lazy(() => import("./diversidadeComponent"));
const PratosComponent = lazy(() => import("./pratosComponent"));

export default function HistoriaContentComponent() {
  const [ref, inView, entry] = useInView({ threshold: 0 });
  const [isVisible, setIsVisible] = useState(false);

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
    <div>
      {/* ONDA */}
      <InView>
        {({ inView, ref, entry }) => (
          <Suspense fallback={<div>LOADING...</div>}>
            {!inView ? <OndasTopComponent ref={ref} /> : null}
          </Suspense>
        )}
      </InView>

      {/* TEXTO ROTATIVO */}
      <Suspense fallback={<div>LOADING...</div>}>
        <RotatingTextComponent />
      </Suspense>

      {/* HISTORIA */}
      <Suspense fallback={<div>LOADING...</div>}>
        <HistoriaComponent />
      </Suspense>

      {/* TRIGO */}
      <Box>
        <Image
          src={trigo}
          className="trigo"
          style={{ transform: `translateY(${offsetY * 0.05}px)` }}
        />
      </Box>

      {/* DO CAMPO PARA A MESA */}
      <Suspense fallback={<div>LOADING...</div>}>
        <CampoMesaComponent />
      </Suspense>

      {/* ERVILHAS */}
      <Box>
        <Image
          src={ervilhas}
          className="ervilhas"
          style={{ transform: `translateY(${offsetY * 0.07}px)` }}
        />
      </Box>

      {/* A DIVERSIDADE EM MARCA */}
      <Suspense fallback={<div>LOADING...</div>}>
        <DiversidadeComponent />
      </Suspense>

      {/* PRATOS */}
      <Suspense fallback={<div>LOADING...</div>}>
        <PratosComponent />
      </Suspense>
    </div>
  );
}
