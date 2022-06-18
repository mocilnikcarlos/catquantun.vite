import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import IndexHero from "./pages/home/IndexHero";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<IndexHero />} />
      </Routes>
    </Fragment>
  );
};

export default App;
