import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./view/common/Navbar/Navbar";
import {Home} from "./view/pages/home/Home";
import {MainContent} from "./view/common/MainContent/MainContent";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <MainContent/>
    </BrowserRouter>
  );
}

export default App;
