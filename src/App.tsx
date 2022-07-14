import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Animals } from "./components/pages/Animals";
import { Home } from "./components/pages/Home";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { ListHandler } from "./components/ListHandler";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <Provider store={Store}>
      <ListHandler />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/animals/*" element={<Animals />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
