import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import IndexHome from "./pages/home/IndexHome";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<IndexHome />} />
      </Routes>
    </Fragment>
  );
};

export default App;
