import Logo from './download.png'
import './App.css';
import Navbar from './components/Navbar';
import Items from './components/Items';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="">
      <Navbar Logo={Logo}/>
      <Items/>
      <Footer/>
    </div>
  );
}

export default App;
