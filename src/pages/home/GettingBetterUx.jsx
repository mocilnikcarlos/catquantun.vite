import Design from "../../assets/svg/Design";
import Pen from "../../assets/svg/Pen";
import Search from "../../assets/svg/Search";
import CardLines from "../../components/cards/CardLines";
import { TitleWeb2 } from "../../components/common/TitleWeb";
import "./GettingBetterUx.scss";

const GettingBetterUx = () => {
  return (
    <section className="box-section section-better-ux">
      <article className="box-article article-better-ux">
        <TitleWeb2 placeholder="Mejorando la experiencia del usuario" />
        <div className="content-cards-better-ux">
          <CardLines
            element={<Design />}
            title="User Interface"
            text="Diseños creativos, modernos a necesidad del producto. Desde sitios web, e-commerce, dashboard, etc"
          />
          <CardLines
            element={<Pen />}
            title="UX Writing"
            text="Llega a tus usuarios con un diálogo coherente, cohesivo y atractivo. Capturalos y haz que tu marca sea fácil de recordar."
          />
          <CardLines
            element={<Search />}
            title="UX Research"
            text="Búsqueda acorde a la necesidad de los usuarios, estudio exhaustivo de la competencia para brindar lo mismo y mejor de lo que ya está en el mercado."
          />
        </div>
      </article>
    </section>
  );
};

export default GettingBetterUx;
