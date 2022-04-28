import React from "react";
import FooterComponent from "../components/footerComponent";
import HeaderComponent from "../components/headerComponent";
import HeroComponent from "../components/heroComponent";
import { SlideDataProdutos } from "../components/slideDataProdutos";

export default function ProdutosPage() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent title="O verão chegou!" slide={SlideDataProdutos} />
      <FooterComponent />
    </div>
  );
}
