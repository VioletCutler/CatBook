import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <div>
        <h1>
          Welcome to Catbook! Please click{" "}
          <em>
            <Link to="/cats">Here</Link>
          </em>{" "}
          to view our cats.{" "}
        </h1>
      </div>
      <img className="homePagePhoto" src="/kittens.jpeg" />
    </div>
  );
};

export default Posts;
