import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Cats from "./Cats";
import Cat from "./Cat";
import CatApi from "./CatApi";
import ErrorMessage from "./ErrorMessage";
import catList from "../data";
import { fetchCats } from "../api";

const App = () => {
  const [currentCatList, updateCatList] = useState(catList);
  const [apiCatList, setApiCatList] = useState([]);

  useEffect(() => {
    fetchCats()
    .then((cats) => {
      setApiCatList(cats)
    })
    .catch(error => {
      console.error(error)
    })
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cats"
          element={<Cats currentCatList={currentCatList} />}
        />
        <Route
          path="/cats/:id"
          element={
            <Cat
              currentCatList={currentCatList}
              updateCatList={updateCatList}
            />
          }
        />
        <Route path="/api" element={<CatApi apiCatList={apiCatList} />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </>
  );
};

export default App;
