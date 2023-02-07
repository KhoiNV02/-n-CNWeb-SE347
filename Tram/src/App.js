import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
