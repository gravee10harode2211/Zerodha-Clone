import React from "react";
import Brokerage from "./Brokerage";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;
