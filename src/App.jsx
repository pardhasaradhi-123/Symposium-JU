import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutEvent from "./components/AboutEvent";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NonTechEvents from "./components/NonTechEvents";
import TechEvents from "./components/TechEvents";
import React from "react";
import EventDetails from "./components/EventDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Banner />
              <AboutEvent />
              <TechEvents />
              <NonTechEvents />
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/:eventName" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
