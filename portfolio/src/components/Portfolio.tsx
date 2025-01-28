// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import PortfolioNavbar from "./nav/PortfolioNavbar";

export default function Portfolio() {
  return (
    <div>
      <PortfolioNavbar />
      <div style={{ margin: "0.5rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
