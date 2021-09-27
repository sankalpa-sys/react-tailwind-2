import Logo from "./download.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Items from "./components/Items";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";

function App() {

  const [mode, setmode] = useState("light")
  const [bgcolor, setbgcolor] = useState("gray-300")
  const [fieldBg, setfieldBg] = useState("blue-100")
  const [borderColor, setborderColor] = useState("gray-300")
  const [cardBg, setcardBg] = useState("white")
  
  const [textColor, settextColor] = useState("black")
  const handleClick = () => {
    if(mode === "light"){
      setmode("dark")
      setbgcolor("black")
      setborderColor("indigo-500")
      setcardBg("gray-900")
     
      settextColor("white")
      setfieldBg("gray-900")
      document.body.style.backgroundColor = "black"
    }
    else{
      setbgcolor("gray-300")
      setmode("light")
      setfieldBg("blue-100")
      setborderColor("gray-300")
      setcardBg("white")
      
      settextColor("black")
      document.body.style.backgroundColor=

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
          <Route exact path="/about">
            <About textColor={textColor}/>
          </Route>
          <Route exact path="/contact">
            <Contact textColor={textColor} fieldBg={fieldBg} borderColor={borderColor}/>
          </Route>
          <Route exact path="/service">
            <Service textColor={textColor} cardBg={cardBg} />
          </Route>
        </Switch>
        <Footer bgcolor={bgcolor} textColor={textColor} />
      </Router>
    </div>
  );
}

export default App;
