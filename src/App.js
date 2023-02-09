import React from "react";
import {
  Routes,
  Route
} from 'react-router-dom';
// pages
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
// components
import AddFox from "./components/addFox/AddFox";
import FoxEdit from "./components/edit/FoxEdit";
import FoxDetail from "./components/foxDetail/FoxDetail";
// styles
import './App.css';

const App = () => {

  return (
    <Routes>

      <Route path="/" element={<Home />}></Route>

      <Route path="/home" element={<DetailPage />}></Route>
      <Route path="/foxes/add" element={<AddFox />}></Route>

      <Route path="/foxes/detail/:foxid" element={<FoxDetail />}></Route>
      <Route path="/foxes/edit/:foxid" element={<FoxEdit />}></Route>

    </Routes>
  );
}

export default App;
