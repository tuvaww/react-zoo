import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Animals } from "./components/pages/Animals";
import { Home } from "./components/pages/Home";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { ListHandler } from "./components/ListHandler";

function App() {
  //console.log(reduxAnimals);

  return (
    <Provider store={Store}>
      <ListHandler />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/animals/*" element={<Animals />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
