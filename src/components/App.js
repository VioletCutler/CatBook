import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  HomePage, 
  Cat,
  Cats,
  CatApi,
  SingleCatApi,
  ErrorMessage,
  Footer
} from './index'

import catList from "../data";
import { fetchCats } from "../api";

const App = () => {
  const [currentCatList, updateCatList] = useState(catList);
  const [apiCatList, setApiCatList] = useState([]);
  
  async function callFetchCats() {
    const fetchedCats = await fetchCats()
    setApiCatList(fetchedCats)
  }
  useEffect(() => {
    // fetchCats()
    // .then((cats) => {
    //   setApiCatList(cats)
    // })
    // .catch(error => {
    //   console.error(error)
    // })
    callFetchCats()

  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cats/local"
          element={<Cats currentCatList={currentCatList} />}
        />
        <Route
          path="/cats/local/:id"
          element={
            <Cat
              currentCatList={currentCatList}
              updateCatList={updateCatList}
            />
          }
        />
        <Route path="/cats/world" element={<CatApi apiCatList={apiCatList} />} />
        <Route path="cats/world/:id" element={<SingleCatApi apiCatList={apiCatList} />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
