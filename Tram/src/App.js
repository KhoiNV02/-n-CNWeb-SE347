import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
