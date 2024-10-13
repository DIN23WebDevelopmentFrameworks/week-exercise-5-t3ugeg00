import { useState, useEffect } from "react";

import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { IRecipe } from "./Recipe";
const App = () => {
  const [tagList, setTagList] = useState<string[]>([])
  const [recipeList, setRecipeList] = useState<IRecipe[]>([])
  const [areTagsOpened, setAreTagsOpened] = useState<boolean>(true)

  useEffect(getTags, [])

  function getTags(){
    fetch("https://dummyjson.com/recipes/tags")
    .then(data => data.json())
    .then(json => setTagList(json))
  }

  function handleClickOnTag(tagName : string){
    console.log("OPEN:::" + tagName)
    setAreTagsOpened(false)
    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
    .then(data => data.json())
    .then(json => setRecipeList(json.recipes))
  }

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      <BrowserRouter>
          <div>
          {areTagsOpened && ( 
          <>
            <h3>Choose a tag below</h3>
            <RecipeTagList tagList={tagList} onSelectTag={handleClickOnTag}/>
          </>
        )}
          </div>
             <Routes>
               {tagList.map(tagName => 
               <Route 
                  key={tagName}
                  path={`/${tagName.toLowerCase()}`} 
                  element={ <RecipeList recipes={recipeList}/> }
                />)}
            </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;