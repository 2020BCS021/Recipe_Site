import React, { useState, useEffect } from "react";
// import Menu from "./menu";



const Saved = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fetchRecipe = async() => {
            try {
                const response = await fetch("/Create", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(recipes),
                })
                setRecipes(response.data);
                console.log(response.data);

            } catch (err) {
                console.error(err);
            }
        }
        fetchRecipe();

    }, []);

    return (

        <
        section className = "container" >
        <
        div className = "row" > {
            recipes.map((recipe) => ( <
                div className = "col-md-4"
                key = { recipe._id } >
                <
                div className = "card mb-4" >
                <
                img src = { recipe.Recipe_Image }
                alt = "img"
                className = "card-img-top" / >
                <
                div className = "card-body" >
                <
                h5 className = "card-title" > { recipe.Recipe_Name } < /h5> <
                p className = "card-text" > Ingredients: { recipe.Ingredients[0] } < /p> <
                p className = "card-text" >
                <
                small className = "text-muted" > Category: { recipe.Select_Category } < /small> <
                /p> <
                /div> <
                div className = "card-footer" >
                <
                p className = "card-text" >
                <
                small className = "text-muted" > How_to_Make: { recipe.How_to_Make } < /small> <
                /p> <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /section>
    );
};

export default Saved;