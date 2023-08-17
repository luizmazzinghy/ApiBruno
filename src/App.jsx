import { Outlet } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Search from "./components/Search";

import "./App.css";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
