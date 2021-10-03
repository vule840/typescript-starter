import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import ReactForm from "./components/ReactForm";
import Material from "./components/Material";
import Firebase from "./components/Firebase";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/reactform">
          <ReactForm />
        </Route>
        <Route path="/material">
          <Material />
        </Route>
        <Route path="/firebase">
          <Firebase />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
