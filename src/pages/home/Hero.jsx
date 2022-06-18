import MyName from "../../components/other/MyName";
import { Location, Hability } from "../../components/other/InfoHero";
import "./Hero.scss";
import GlitchDesigner from "../../components/other/GlitchDesigner";

const Hero = () => {
  return (
    <section className="box-section background-hero">
      <article className="box-article article-hero">
        <MyName placeholder="Yo soy Carlos Alberto Mocilnik" />
        <GlitchDesigner placeholder="Designer UX/UI" />
        <div className="boxs-infohero">
          <Location
            placeholderup="Argentina"
            placeholderdown="Zarate - Buenos Aires"
          />
          <Hability
            placeholderup="Freelancer"
            placeholderdown="Designer and Dev. Front-End"
          />
        </div>
      </article>
    </section>
  );
};

export default Hero;
