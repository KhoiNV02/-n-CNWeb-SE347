import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/Contact/index";
import { Blogs } from "./pages/Blogs/index";
import Home from "./pages/Home/index";
import { Tours } from "./pages/Tours/index";

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router}></RouterProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
