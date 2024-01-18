import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./view/common/Navbar/Navbar";
import {Home} from "./view/pages/home/Home";
import {MainContent} from "./view/common/MainContent/MainContent";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Dashboard} from "@mui/icons-material";
import {AdminDashboard} from "./view/pages/adminDashboard/AdminDashboard";
import {AdminLayout} from "./view/common/AdminLayout/AdminLayout";
import {AdminLogin} from "./view/pages/AdminLogin/AdminLogin";

function App() {
  return (
      <BrowserRouter>
          {/*<DefaultLayout/>*/}
          {/* <Login/>*/}
          <Routes>
              <Route path="/*"
                     Component={DefaultLayout}>
              </Route>
              <Route path="/admin"
                     Component={AdminLogin}>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
