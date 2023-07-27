import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import SearchBar from "./SearchBar";

const HomeScreen = () => {
  const [theRecipes, setTheRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      let resp = await axios.get("https://recipes.devmountain.com/recipes");
      console.log(resp.data);
      setTheRecipes(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <SearchBar theRecipes={theRecipes} />
    </div>
  );
};

export default HomeScreen;
