interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTag({tagName, onSelectTag} : IRecipeTagProps){
    return (
        <div className={"tagBox"} onClick={(event) => onSelectTag((event.target as HTMLDivElement).innerText)}>
            {tagName}
        </div>
    )
}
