import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // Requirment: when the form is submitted, a new recipe should be created, and the form contents cleared.
  
  // Add the required change handlers
  
  const [name, setName] = useState("Name");
  const handleNameChange = (event) => setName(event.target.value);

  const [cuisine, setCuisine] = useState("Cuisine");
  const handleCuisineChange = (event) => setCuisine(event.target.value);

  const [photo, setPhoto] = useState("URL");
  const handlePhotoChange = (event) => setPhoto(event.target.value);

  const [ingredients, setIngredients] = useState("Ingredients");
  const handleIngredientChange = (event) => setIngredients(event.target.value);

  const [preparation, setPreparation] = useState("Preparation");
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  // Add the submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("Name");
    setCuisine("Cuisine");
    setPhoto("URL");
    setIngredients("Ingredients");
    setPreparation("Preparation");

  }
  
  //return a form that has the input field and textarea, and a create button
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" onChange={handleNameChange} value={name}></input></td>
            <td><input name="cuisine" onChange={handleCuisineChange} value={cuisine}></input></td>
            <td><input name="photo" type="url" onChange={handlePhotoChange} value={photo}></input></td>
            <td><textarea name="ingredients" onChange={handleIngredientChange} value={ingredients}></textarea></td>
            <td><textarea name="preparation" onChange={handlePreparationChange} value={preparation}></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
