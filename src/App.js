import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  );
}

export default App;
