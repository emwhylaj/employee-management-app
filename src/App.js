import "./App.css";
import { Home } from "./components/Home";
import { Employee } from "./components/Employee";
import { Department } from "./components/Department";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          React JS with web API demo
        </h3>
        <h5 className="m-3 d-flex justify-content-center">
          Employee Management Portal
        </h5>
        <Navigation />
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
