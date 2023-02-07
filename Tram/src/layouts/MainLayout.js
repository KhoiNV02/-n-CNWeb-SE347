import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  const [toggeMenu, setToggeMenu] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
