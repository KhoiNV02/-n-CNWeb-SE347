import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  const [toggeMenu, setToggeMenu] = useState(false);

  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
