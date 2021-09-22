import Logo from "./download.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Items from "./components/Items";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [bgcolor, setbgcolor] = useState("gray-300")
  
  const [textColor, settextColor] = useState("black")
  const handleClick = () => {
    if(mode === "light"){
      setmode("dark")
      setbgcolor("black")
     
      settextColor("white")
      document.body.style.backgroundColor = "black"
    }
    else{
      setbgcolor("gray-300")
      setmode("light")
      
      settextColor("black")
      document.body.style.backgroundColor = 
      "#D1D5DB"
      
    }
  
  }
  return (
    <div className="">
      <Router>
        <Navbar Logo={Logo} handleClick={handleClick} mode={mode} bgcolor={bgcolor}  textcolor={textColor} />
        <Switch>
          <Route exact path="/">
            <Items category="electronics" key="electronics" textColor={textColor} />
          </Route>
          <Route exact path="/jewelery">
            <Items category="jewelery" key="jewelery" textColor={textColor} />
          </Route>
        </Switch>
        <Footer bgcolor={bgcolor} textColor={textColor} />
      </Router>
    </div>
  );
}

export default App;
