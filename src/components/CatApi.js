const { useEffect, useState } = require("react");
import { Link } from 'react-router-dom'

const CatApi = ({ apiCatList }) => {
  console.log(apiCatList)

  return (
    <div className="container">
      <h1 className="pageHeader">Cat API Results:</h1>
      <div className="catList">
        {apiCatList.map((cat) => {
          return (
            <div className="cat" key={cat.id}>
              {cat.image ? (
                <img className="catPhotos" src={cat.image.url} ></img>
              ) : (
                <h1>Picture of a Cat</h1>
              )}
  
              <h3>Origin: {cat.origin}</h3>
              <h3>Temperment: {cat.temperament}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatApi;
