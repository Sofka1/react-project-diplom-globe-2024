import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import MainTest from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainTest/>
    </BrowserRouter>
  );
}

export default App;
