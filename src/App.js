import Logo from "./download.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar Logo={Logo} />
        <Switch>
          <Route exact path="/">
            <Items category="electronics" key="electronics" />
          </Route>
          <Route exact path="/jewelery">
            <Items category="jewelery" key="jewelery" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
