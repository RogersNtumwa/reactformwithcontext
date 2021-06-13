import React from "react";
import RecipeState from "./Context/RecipeState";
import AddRecipeForm from "./Screens/AddRecipeform";
import FormState from "./Context/FormState";

function App() {
  return (
    <div className="App">
      <RecipeState>
        <FormState>
          <AddRecipeForm />
        </FormState>
      </RecipeState>
    </div>
  );
}

export default App;
