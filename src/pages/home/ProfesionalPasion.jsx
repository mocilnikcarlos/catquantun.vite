import EyeCard from "../../assets/svg/EyeCard";
import {
  FirstCardDesigner,
  SecondCardDesigner,
} from "../../components/cards/CardDesigner";
import { TitleWeb1 } from "../../components/common/TitleWeb";
import "./ProfesionalPasion.scss";

const ProfesionalPasion = () => {
  return (
    <section className="box-section profesional-pasion-section">
      <article className="box-article profesional-pasion-article">
        <TitleWeb1 placeholder="Pasión profesional" />
        <div className="box-cards-design">
          <div className="first-cards">
            <FirstCardDesigner
              title="hola, este es un titulo"
              text="Y este es el texto"
              element={<EyeCard />}
              img="wallpaper"
            />
            <FirstCardDesigner
              title="Este es otro titulo"
              text="Y este es otro texto"
              element={<EyeCard />}
              img="bghero"
            />
          </div>
          <div className="second-cards">
            <SecondCardDesigner
              title="Este titulo nuevo"
              text="Es de una card mas pequeña"
              element={<EyeCard />}
              img="wallpaper"
            />
            <SecondCardDesigner
              title="Otro titulo nuevo"
              text="Texto de la segunda mas pequeña"
              element={<EyeCard />}
              img="bghero"
            />
            <SecondCardDesigner
              title="Ultimo titulo"
              text="Ultima texto de la card"
              element={<EyeCard />}
              img="wallpaper"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProfesionalPasion;
