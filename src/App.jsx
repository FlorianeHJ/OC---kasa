import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

import Accomodation from "./pages/Accomodation";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:id" element={<Accomodation />} />        

      </Routes>
    </BrowserRouter>
  );
};

export default App;
