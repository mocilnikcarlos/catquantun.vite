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
        <p className="textweb">
          En pocas palabras, un diseñador UX está encargado de lograr generar la
          mejor experiencia para el usuario. Tan simple y tan complejo a la vez,
          se necesitan de muchas herramientas, desde psicológicas hasta
          tecnológicas. Aun así, no solo es pensar en el usuario. Tener bien en
          claro cuál es el objetivo de la empresa también entra en estos
          requisitos, ya que será este el propósito que se verá reflejado en el
          usuario.
        </p>
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
        <p className="textweb">
          Para entrar en detalles de como se logra una buena experiencia de
          usuario primero hay que entender que este proceso es un bucle y que no
          acaba una vez obtenido un resultado. La sociedad avanza y con ella las
          necesidades. Quedarse con un solo resultado implica estancarse en un
          grupo reducido de personas, perdiendo así una gran cantidad de
          tráfico.
        </p>
      </article>
    </section>
  );
};

export default WorkDesigner;
