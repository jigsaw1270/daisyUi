import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Buttons from "./components/Button";
import Cards from "./components/Cards";
import Alerts from "./components/Alerts";
import "./index.css";
import Carousel from "./components/Carousel";
import Login from "./components/Login";
import Calender from "./components/Calender";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/carousel" element = {<Carousel/>}/>
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/login" element={<Login />} />
      <Route path="/calender" element={<Calender/>}/>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
