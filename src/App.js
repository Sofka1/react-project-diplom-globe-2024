import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import MainTest from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainTest/>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
