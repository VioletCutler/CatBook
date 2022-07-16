const { useEffect, useState } = require("react");

const CatApi = ({ apiCatList }) => {
  console.log("API CAT LIST:", apiCatList);
  return (
    <div>
      <h1>Cat API Results:</h1>
      <div className="container">
        {apiCatList.map((cat) => {
          return (
            <div className="apiCat" key={cat.id}>
              <h1>{cat.name}</h1>
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
