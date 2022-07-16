const { useEffect, useState } = require("react");

const CatApi = ({ apiCatList }) => {
  console.log("API CAT LIST:", apiCatList);
//   const catPic = apiCatList[0].image.url;
  return (
    <div>
      <h1>Cat API Results:</h1>
      <div className="container">
        {apiCatList.map((cat) => {
        //   console.log(cat.image.url);
          return (
            <div className="apiCat" key={cat.id}>
              <h1>{cat.name}</h1>
              <h3>Origin: {cat.origin}</h3>
              <h3>Temperment: {cat.temperament}</h3>
              {/* <img style={{maxWidth: 20, }}src={catPic} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatApi;
