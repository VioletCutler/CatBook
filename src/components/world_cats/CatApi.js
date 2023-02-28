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
                <p>Picture of a Cat</p>
              )}
              <Link to={`/cats/world/${cat.id}`}><p>Name : {cat.name}</p></Link>
              <p>Origin: {cat.origin}</p>
              <p>Temperament: {cat.temperament}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatApi;
