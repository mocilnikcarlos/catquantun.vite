import { Fragment } from "react";
import GettingBetterUx from "./GettingBetterUx";
import Hero from "./Hero";
import ProfesionalPasion from "./ProfesionalPasion";
import WorkDesigner from "./WorkDesigner";

const IndexHome = () => {
  return (
    <Fragment>
      <Hero />
      <WorkDesigner />
      <GettingBetterUx />
      <ProfesionalPasion />
    </Fragment>
  );
};

export default IndexHome;
