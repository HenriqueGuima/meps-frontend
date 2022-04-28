import React from "react";
import FooterComponent from "../components/footerComponent";
import HeaderComponent from "../components/headerComponent";
import HeroComponent from "../components/heroComponent";
import HistoriaContentComponent from "../components/historiaContentComponent";
import { SlideDataHistoria } from "../components/slideDataHistoria";

export default function HistoriaPage() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent
        title="Uma nova cara... a qualidade de sempre!"
        slide={SlideDataHistoria}
      />
      <HistoriaContentComponent />
      <FooterComponent />
    </div>
  );
}
