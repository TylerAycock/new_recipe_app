import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(`recipe/${recipe.recipe_id}`)
  }

  return (
    <div className="recipes-container">
      <div className="recipe-card">
        <img src={recipe.image_url} alt="food image" />
        <div className="details">
          <h1>{recipe.recipe_name}</h1>
          <button onClick={clickHandler}>See More</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
