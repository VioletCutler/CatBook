import { useParams } from "react-router-dom";

const SingleCatApi = ({ apiCatList }) => {
  const { id } = useParams();

  const catArray = apiCatList.filter((cat) => cat.id == id);
  const cat = catArray[0];

  return (
    <div>
      {catArray.length ? (
        <div id="single-cat-api-container">
          <div id="single-cat-api-info">
            <h1>{`Welcome to ${cat.name}'s page!`}</h1>

            {cat.image ? <img className="singleCatPhoto" src={cat.image.url} /> : <img className="singleCatPhoto" src="https://http.cat/404"/>}

            <div id="single-cat-info">
              <p>Origin: {cat.origin}</p>
              <p>Temperament: {cat.temperament}</p>
              <p>Average life span : {cat.life_span}</p>
            </div>
          </div>
          <aside id="cat-api-stats-table-container">
            <h2>Cat Stats <span>[1 - 5]</span></h2>
            <div id="cat-api-stats-table">
              <div className="cat-stat">
                <p>Adaptability : </p>
                <p>{cat.adaptability}</p>
              </div>
              <div className="cat-stat">
                <p>Affection Level : </p>
                <p>{cat.affection_level}</p>
              </div>
              <div className="cat-stat">
                <p>Child Friendly : </p>
                <p>{cat.child_friendly}</p>
              </div>
              <div className="cat-stat">
                <p>Dog Friendly : </p>
                <p>{cat.dog_friendly}</p>
              </div>

              <div className="cat-stat">
                <p>Energy Level : </p>
                <p>{cat.energy_level}</p>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
};

export default SingleCatApi;
