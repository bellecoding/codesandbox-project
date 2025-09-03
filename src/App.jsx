import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="weather-app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
