import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurPackages from "./OurPackages";
import Services from "./Services";
import Blogs from "./Blogs";
import MainLayout from "./../../layouts/MainLayout";
import Contact from "./Contact";

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <AboutUs />
      <Services />
      <OurPackages />
      <Blogs />
      <Contact />
    </MainLayout>
  );
};

export default Home;
