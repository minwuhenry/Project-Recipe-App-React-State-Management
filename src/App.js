import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  
  //create recipes constant, createRecipe and deleteRecipe functions so that the states can be shared and updated by child components such as RecipeList and 
  //RecipeCreate
  
  const [recipes, setRecipes] = useState(RecipeData);
  const createRecipe = (newRecipe) => setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

  const deleteRecipe = (indexToDelete) => 
        setRecipes((currentRecipes) =>
          currentRecipes.filter((recipe, index) => index !== indexToDelete)
        );

  //  <RecipeList /> component to list and delete an existing recipe.
  // <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
