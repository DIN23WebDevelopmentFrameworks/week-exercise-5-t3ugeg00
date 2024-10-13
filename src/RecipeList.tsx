import { IRecipe } from "./Recipe";
import Recipe from "./Recipe";

interface IRecipeListProps {
    recipes: IRecipe[];
}

export default function RecipeList({recipes} : IRecipeListProps){
    recipes.map(recipe => console.log(recipe))
    return (
        <div>
            {recipes.map(recipe => <Recipe recipeData={recipe}/>)}
        </div>
    )
}