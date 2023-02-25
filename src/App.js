import "./App.css";
import React from "react";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyMe from "./pages/WhyMe";
import Details from "./pages/Details";
import Section from "./pages/Section";
import Footer from "./pages/Footer";
import Blog from "./pages/Blog";
import Subscribe from "./pages/Subscribe";
import ClientFeedback from "./pages/ClientFeedback";

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <Section />
      <About />
      <Details />
      <Services />
      <WhyMe />
      <ClientFeedback />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
