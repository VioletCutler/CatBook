import { Link } from "react-router-dom";

const Cats = ({ currentCatList }) => {
  console.log(currentCatList);
  return (
    <div className="container">
      <h1 className="pageHeader">Check out our cats!</h1>
      <div className="catList">
        {currentCatList.map((cat) => (
          <div className="cat" key={cat.id}>
            <p>
              Meet <Link to={`/cats/local/${cat.id}`}>{cat.name}</Link>
            </p>
            <p>Born {cat.birthdate}</p>
            <img className="catPhotos" src={cat.thumbnail_url} />
            <p>Owned by {cat.owner_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;
