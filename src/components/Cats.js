import { Link } from "react-router-dom";

const Cats = ({ currentCatList }) => {
  console.log(currentCatList);
  return (
    <div className="container">
      <h1 className="pageHeader">Check out our cats!</h1>
      <div className="catList">
        {currentCatList.map((cat) => (
          <div className="cat" key={cat.id}>
            <h1>
              Meet <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
            </h1>
            <h3>Born {cat.birthdate}</h3>
            <img className="catPhotos" src={cat.thumbnail_url} />
            <h2>Owned by {cat.owner_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;
