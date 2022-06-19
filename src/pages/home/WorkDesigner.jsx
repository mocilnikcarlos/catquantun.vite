import AbTesting from "../../assets/svg/AbTesting";
import DataProt from "../../assets/svg/DataProt";
import Idea from "../../assets/svg/Idea";
import UserSpeak from "../../assets/svg/UserSpeak";
import CardCircle from "../../components/cards/CardCircle";
import { TitleWeb2 } from "../../components/common/TitleWeb";
import "./WorkDesigner.scss";

const WorkDesigner = () => {
  return (
    <section className="box-section section-work-designer">
      <article className="box-article article-work-designer">
        <TitleWeb2 placeholder="El trabajo de un Designer UX" />
        <div className="cards-work-designer">
          <CardCircle
            element={<UserSpeak />}
            placeholderinside="Encontrar los problemas integrando análisis del producto escuchando a los usuarios"
            placeholderout="Consultoría"
          />
          <CardCircle
            element={<Idea />}
            placeholderinside="Incluir las soluciones con herramientas de UX. Sitemap, Wireframes, User Flows"
            placeholderout="Ideación"
          />
          <CardCircle
            element={<DataProt />}
            placeholderinside="La parte visual del proyecto haciéndose presencia la UI. Atraer al usuario con un diseño"
            placeholderout="Prototipado"
          />
          <CardCircle
            element={<AbTesting />}
            placeholderinside="La única manera de mejorar un producto es integrar medición y análisis con datos reales."
            placeholderout="Testing"
          />
        </div>
      </article>
    </section>
  );
};

export default WorkDesigner;
