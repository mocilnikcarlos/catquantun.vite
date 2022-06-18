import "./GlitchDesigner.scss";

const GlitchDesigner = (props) => {
  return (
    <div className="hero-container">
      <h1 className="hero glitch layers" data-text={`${props.placeholder}`}>
        <span className="title-glitch-hero">{props.placeholder}</span>
      </h1>
    </div>
  );
};

export default GlitchDesigner;
