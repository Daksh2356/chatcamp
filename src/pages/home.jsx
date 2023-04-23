import About from "@/components/home/About";
import Card from "@/components/home/Card";
import Contact from "@/components/home/Contact";
import Courses from "@/components/home/Courses";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import React from "react";


const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Courses/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default Home;
