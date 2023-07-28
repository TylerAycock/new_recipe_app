import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import "./NewRecipeScreen.css";
import axios from "axios";

const NewRecipeScreen = () => {
  const navigate = useNavigate();

  const initialValues = {
    recipeName: "",
    imageUrl: "",
    type: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const validateNAme = (value) => {
    let error;
    if (!value) {
      error = "Required!";
    }
    return error;
  };

  const onSubmit = (values) => {
    console.log(values);
    values.ingredients = ingredients;
    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((response) => {
        navigate(`/recipe/${response.data[0][0].recipe_id}`);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredients([
      ...ingredients,
      {
        name: name,
        quantity: quantity,
      },
    ]);
    setName("");
    setQuantity("");
  };

  const singleIngredient =
    ingredients.length > 0 &&
    ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient.quantity + " " + ingredient.name}</li>;
    });

  return (
    <section id="form-container">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit, errors, touched }) => {
          return (
            <Form>
              <div className="part-one">
                <div className="recipe-name-container">
                  <Field
                    type="text"
                    name="recipeName"
                    placeholder="name"
                    value={values.recipeName}
                    onChange={handleChange}
                    validate={validateNAme}
                  />
                  {errors.recipeName && touched.recipeName && (
                    <p className="error">{errors.recipeName}</p>
                  )}
                </div>
                <Field
                  type="text"
                  name="imageUrl"
                  placeholder="image URL"
                  value={values.imageUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="part-two">
                <div>
                  <Field
                    type="radio"
                    name="type"
                    value="Cook"
                    onChange={handleChange}
                  />
                  <label htmlFor="cook">Cook</label>
                </div>
                <div>
                  <Field
                    type="radio"
                    name="type"
                    value="Bake"
                    onChange={handleChange}
                  />
                  <label htmlFor="bake">Bake</label>
                </div>
                <div>
                  <Field
                    type="radio"
                    name="type"
                    value="Drink"
                    onChange={handleChange}
                  />
                  <label htmlFor="bake">Drink</label>
                </div>
              </div>
              <div className=" part-three">
                <Field
                  type="text"
                  name="prepTime"
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                />
                <Field
                  type="text"
                  name="cookTime"
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                />
                <Field
                  type="text"
                  name="serves"
                  placeholder="Serves"
                  value={values.serves}
                  onChange={handleChange}
                />
              </div>
              <div className="part-four">
                <div className="ing-qty-container">
                  <Field
                    type="text"
                    name="ingredient"
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Field
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="ingredients-list">
                  <ul>{singleIngredient}</ul>
                </div>
              </div>
              <button className="add-btn" onClick={addIngredient}>
                Add Another
              </button>
              <Field
                type="textarea"
                rows="4"
                cols="50"
                name="instructions"
                placeholder="What are the instructions?"
                className="instructions"
                value={values.instructions}
                onChange={handleChange}
              />
              <button type="submit" className="save-btn" onClick={handleSubmit}>
                Save
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
