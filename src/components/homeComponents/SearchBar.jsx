import { useState } from "react";
import search from "../../assets/search.png";
import "./SearchBar.css";
import RecipeCard from "../newRecipeComponents/RecipeCard";

const SearchBar = ({ testRecipe }) => {
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  let recipeDisplay = testRecipe
    .filter((recipe) => {
      if (recipe.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return recipe;
      }
    })
    .map((recipe, index) => {
      return <RecipeCard key={index} recipe={recipe} />;
    });

  return (
    <div className="search">
      <div className="search-bar">
        <img
          src={search}
          alt=""
          className="search-icon"
          
        />
        <input type="text" onChange={changeHandler} placeholder="Search for a Recipe"/>
      </div>
      <div className="recipes-container">{recipeDisplay}</div>
    </div>
  );
};

export default SearchBar;
