import React from "react";
import AddRecipe from "./Screens/AddRecipe";
import RecipeState from "./Context/RecipeState";

function App() {
  return (
    <div className="App">
      <RecipeState>
        <AddRecipe />
      </RecipeState>
    </div>
  );
}

export default App;
