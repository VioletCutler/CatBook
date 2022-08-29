import { useState } from "react";
import { useParams } from "react-router-dom";

const Cat = ({ currentCatList, updateCatList }) => {
  const { id } = useParams();
  const [cat] = currentCatList.filter((cat) => cat.id == id);

  const [catName, setCatName] = useState('');

  function handleSubmit(event) {
    /* createPost({title, description, price, willDeliver})
*/
    
    event.preventDefault();
    cat.name = catName;
    const updatedCatList = currentCatList.map((currentCat) => {
      if (currentCat.id == id) {
        currentCat = cat;
        return cat;
      } else {
        return currentCat;
      }
    });
    updateCatList(updatedCatList);
  }

  function handleChange(event) {
    console.log(event.target.value)
    setCatName(event.target.value);
  }

  return (
    <div>
      <h1>{`Welcome to ${cat.name}'s page!`}</h1>
      <p>
        {cat.name} was born on {cat.birthdate}
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={''} onChange={handleChange} />
        <input type="submit" value="Change Cats Name" />
      </form>
      <br />
      <br />
      <img className='singleCatPhoto' src={cat.thumbnail_url} />
  
     
    </div>
  );
};

export default Cat;
