import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";

import {AdminLogin} from "./view/pages/AdminLogin/AdminLogin";
import {AdminLayout} from "./view/common/AdminLayout/AdminLayout";

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
              <Route path="/admin/*"
                     Component={AdminLayout}>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
