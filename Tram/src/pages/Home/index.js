import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurPackages from "./OurPackages";
import Services from "./Services";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <OurPackages />
      <Blogs />
    </div>
  );
};

export default Home;
