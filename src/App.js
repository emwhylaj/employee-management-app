import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Home } from "./components/Home";
import { Employee } from "./components/Employee";
import { Department } from "./components/Department";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="mt-5 d-flex justify-content-left">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/" component={Employee} />
          <Route path="/" component={Department} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
