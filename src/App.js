import {React} from "react";
import Header from "./components/Header";
import './App.css'
import './styles/Header.css'
import Home from "./components/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MySection from "./components/MySection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Skills/>
      <MySection/>
      <Footer/>
    </div>
  );
}

export default App;
