import "./App.css";
import React from "react";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
// import About from "./pages/About";
import Services from "./pages/Services";
import WhyMe from "./pages/WhyMe";
import Client from "./pages/Client";
// import Section from "./pages/Section";
import Footer from "./pages/Footer";
// import Blog from "./pages/Blog";
import Subscribe from "./pages/Subscribe";
// import ClientFeedback from "./pages/ClientFeedback";
import AboutSection from "./pages/AboutSection";
import BlogClientFeedback from "./pages/BlogClientFeedback";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <About/> */}
      <AboutSection />
      <Client />
      <Services />
      <WhyMe />
      <BlogClientFeedback />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
