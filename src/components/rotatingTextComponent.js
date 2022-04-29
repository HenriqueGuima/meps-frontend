import { Box } from "@chakra-ui/layout";
import React from "react";

export default function RotatingTextComponent() {
  return (
    //ROTATING TEXT
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
  );
}
