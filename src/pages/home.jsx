import About from "@/components/home/About";
import Card from "@/components/home/Card";
import Contact from "@/components/home/Contact";
import Courses from "@/components/home/Courses";
import Hero from "@/components/home/Hero";
import React from "react";


const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Courses/>
    <Contact/>
    </>
  );
};

export default Home;
