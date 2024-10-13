export interface IRecipeProps {
    recipeData: IRecipe;
}

export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

export default function Recipe({recipeData} : IRecipeProps){
    return (
        <div className={'recipe'}
            key={recipeData.id}>
            <h2>{recipeData.name}</h2>
            <h4>Ingredients</h4>
            {recipeData.ingredients.map(line => <li>{line}</li>)}
            <h4>Instructions</h4>
            <ol>
                {recipeData.instructions.map(line => <li>{line}</li>)}
            </ol>
        </div>
    )
}