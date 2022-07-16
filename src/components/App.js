import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Cats from "./Cats";
import Cat from "./Cat";
import CatApi from "./CatApi";
import ErrorMessage from "./ErrorMessage";
import style from "../style/style.css";
import catList from "../data";

const App = () => {
  const [currentCatList, updateCatList] = useState(catList);
  const [apiCatList, setApiCatList] = useState([])

  useEffect(() => {
    const getCats = async () => {
        try {
          const response = await fetch(
            "https://api.thecatapi.com/v1/breeds", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "x-api-key": "407340d1-c60c-47b0-bff0-bfc2d7caeb15"
                },
            }
          );
          const cats = await response.json()
          setApiCatList(cats)
          console.log(Array.isArray(cats))
        } catch (error) {
          console.log(error);
        }
      };
      getCats()
  }, [])

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
        <Route path="/api" element={<CatApi apiCatList={apiCatList}/>} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </>
  );
};

export default App;
