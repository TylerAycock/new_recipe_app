import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import salmon from "../../assets/salmon.jpg";
import "./DetailScreen.css";

const DetailScreen = () => {
  const params = useParams();
  console.log(params.id);
  const [recipeDetails, setRecipeDetails] = useState({});

  const getSpecificRecipe = async () => {
    try {
      let resp = await axios.get(
        `https://recipes.devmountain.com/recipes/${params.id}`
      );
      console.log(resp.data);
      setRecipeDetails(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSpecificRecipe();
  }, []);


  let individualIngredients = recipeDetails.ingredients?.map((ingredient, index) => {
    return <li key={index}>{ingredient.quantity} {ingredient.ingredient}</li>;
  });

  return (
    <section>
      <div
        className="img-container"
        style={{
          background: `
          linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
        url(${recipeDetails.image_url})`,
          backgroundSize: "cover",
        }}
      >
        <h1>{recipeDetails.recipe_name}</h1>
      </div>
      <div className="recipe-details-container">
        <section className="time-ingredients-card">
          <div className="recipe-time">
            <h2>Recipe</h2>
            <ul>
              <li>Prep Time: {recipeDetails.prep_time}</li>
              <li>Cook Time: {recipeDetails.cook_time} </li>
              <li>Serves: {recipeDetails.serves}</li>
            </ul>
          </div>
          <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul>{individualIngredients}</ul>
          </div>
        </section>
        <section className="instructions-card">
          <h2>Instructions</h2>
          <p>{recipeDetails.instructions}</p>
        </section>
      </div>
    </section>
  );
};

export default DetailScreen;
