import RecipeTag from "./RecipeTag";
import { Link } from "react-router-dom";


interface IRecipeTagListProps { 
    tagList: string[]; 
    onSelectTag: (tagName: string) => void; 
}

export default function RecipeTagList({tagList, onSelectTag} : IRecipeTagListProps){
    return (
        <div>
            {tagList.map(tagName => <Link key={tagName} to={`/${tagName.toLowerCase()}`}><RecipeTag tagName={tagName} onSelectTag={onSelectTag}/></Link>)}
        </div>
    )
}