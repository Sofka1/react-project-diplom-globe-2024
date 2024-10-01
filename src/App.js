import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MainFlight from './components/FlightSearch/MainFlightSearch/MainFlightSearch';
import Footer from './components/Footer/Footer';
import HeaderBase from './components/HeaderBase/HeaderBase'; // для остальных страниц
import SearchFlight from './components/FlightSearch/SearchFlight/ResultSearchFlight';
import HeaderMin from './components/HeaderMin/HeaderMin'

function App() {
  const location = useLocation();

  return (
    <>
      {/* Если текущий путь '/' — показываем один Header, иначе — другой */}
      {location.pathname === '/' ? <HeaderMin /> : <HeaderMin />}
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="" element={<MainFlight/>}/> */}
        <Route path="" element={<SearchFlight/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}