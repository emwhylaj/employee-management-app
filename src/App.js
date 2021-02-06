import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Home } from "./components/Home";
import { Employee } from "./components/Employee";
import { Department } from "./components/Department";

function App() {
  return (
    <div className="mt-5 d-flex justify-content-left">
      <Home />
    </div>
  );
}

export default App;
