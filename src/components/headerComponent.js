import React from "react";

import TopBarComponent from "./topBarComponent";
import NavComponent from "./navComponent";
import HeroComponent from "./heroComponent";

export default function HeaderComponent() {
  return (
    // HEADER
    <>
      <TopBarComponent />
      <NavComponent />
    </>
  );
}
