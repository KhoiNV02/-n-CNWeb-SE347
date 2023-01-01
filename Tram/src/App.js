import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
