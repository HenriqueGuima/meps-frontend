import { Box } from "@chakra-ui/layout";
import React, { useEffect } from "react";

export default function ApenasOndaComponent() {
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

  return (
    <Box w="100%" className="ondasDois">
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
      </svg>
    </Box>
  );
}
