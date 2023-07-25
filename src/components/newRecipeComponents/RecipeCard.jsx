import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipes-container">
      <div className="recipe-card">
        <img src={recipe.img} alt="food image" />
        <div className="details">
          <h1>{recipe.name}</h1>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
