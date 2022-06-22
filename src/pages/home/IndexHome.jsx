import { Fragment } from "react";
import GettingBetterUx from "./GettingBetterUx";
import Hero from "./Hero";
import WorkDesigner from "./WorkDesigner";

const IndexHome = () => {
  return (
    <Fragment>
      <Hero />
      <WorkDesigner />
      <GettingBetterUx />
    </Fragment>
  );
};

export default IndexHome;
