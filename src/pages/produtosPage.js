import React from "react";
import FooterComponent from "../components/footerComponent";
import HeaderComponent from "../components/headerComponent";
import HeroComponent from "../components/heroComponent";
import ProdutosContentComponent from "../components/produtosContentComponent";
import { SlideDataProdutos } from "../components/slideDataProdutos";

export default function ProdutosPage() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent
        title="O VERÃO CHEGOU!"
        secondTitle="REFRESQUE-SE COM A FRUTA MEPS"
        slide={SlideDataProdutos}
        logo={false}
      />
      <ProdutosContentComponent />
      <FooterComponent />
    </div>
  );
}
