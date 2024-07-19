import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
    <div className="container">
    <Header /> <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:id" element={<Accomodation />} />        

      </Routes></div>
      <Footer /></div>
    </BrowserRouter>
    
  );
};

export default App;
