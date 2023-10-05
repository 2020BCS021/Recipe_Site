import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import { useGetUserID } from '../hooks/UserId';

const Create = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log(token);

    // if (token !== null) {
    //     alert("hiiii");
    //     navigate('/Login');
    // }

    useEffect(() => {
        if (token !== null) {
            navigate('/Create')

        } else {
            navigate('/Login');
        }
    }, [token, navigate]);

    // State for managing form data
    const userID = window.localStorage.getItem("userInfo");
    console.log("hii " + userID);

    const [formData, setFormData] = useState({
        Recipe_Name: '',
        Ingredients: [''],
        Select_Category: '',
        Recipe_Image: '',
        How_to_make: '',
        userOwner: token
    });

    // Handle changes in the input fields
    const handleInputs = (e) => {
        const { name, value } = e.target;

        // Update other form fields
        setFormData({...formData, [name]: value });
    };

    // Handle changes in Ingredients input fields
    const handleIngredientsInputs = (e, index) => {
        const { value } = e.target;
        const ingredients = [...formData.Ingredients];
        ingredients[index] = value;
        setFormData({...formData, Ingredients: ingredients });
    };

    // Handle form submission
    const PostData = async(e) => {
        e.preventDefault();

        try {
            // Make a POST request to your API endpoint
            const response = await fetch('/Create', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.status === 201) {
                // Successful submission, navigate to the appropriate page (e.g., '/Saved')
                navigate('/Saved');
            } else {
                // Handle error cases (show an alert for now)
                window.alert('Failed to submit recipe. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Add Ingredient input dynamically
    const addIngredientInput = () => {
        const ingredients = [...formData.Ingredients, ''];
        setFormData({...formData, Ingredients: ingredients });
    };

    // Remove Ingredient input dynamically
    const removeIngredientInput = (index) => {
        const ingredients = [...formData.Ingredients];
        ingredients.splice(index, 1);
        setFormData({...formData, Ingredients: ingredients });
    };

    return ( <
            div className = "container mt-5" >
            <
            div className = "row justify-content-center" >
            <
            div className = "col-md-8" >
            <
            div className = "card" >
            <
            div className = "card-body" >
            <
            h1 className = "text-center mb-4" > Submit Your Recipe < /h1> <
            form onSubmit = { PostData } > { /* Recipe Name */ } <
            div className = "mb-3" >
            <
            label htmlFor = "Recipe_Name"
            className = "form-label" >
            Recipe Name <
            /label> <
            input type = "text"
            className = "form-control"
            id = "Recipe_Name"
            name = "Recipe_Name"
            value = { formData.Recipe_Name }
            onChange = { handleInputs }
            required /
            >
            <
            /div>

            { /* Ingredients */ } <
            div className = "mb-3" >
            <
            label htmlFor = "Ingredients"
            className = "form-label" >
            Ingredients <
            /label> {
            formData.Ingredients.map((ingredient, index) => ( <
                div key = { index }
                className = "d-flex mb-2" >
                <
                input type = "text"
                className = "form-control me-2"
                name = "Ingredients"
                value = { ingredient }
                onChange = {
                    (e) => handleIngredientsInputs(e, index)
                }
                required /
                >
                <
                button type = "button"
                className = "btn btn-danger btn-sm"
                onClick = {
                    () => removeIngredientInput(index)
                } >
                Remove <
                /button> < /
                div >
            ))
        } <
        button type = "button"
    className = "btn btn-success btn-sm"
    onClick = { addIngredientInput } >
        Add Ingredient <
        /button> < /
    div >

        { /* Select Category */ } <
        div className = "mb-3" >
        <
        label htmlFor = "Select_Category"
    className = "form-label" >
        Select Category <
        /label> <
    select className = "form-select"
    id = "Select_Category"
    name = "Select_Category"
    value = { formData.Select_Category }
    onChange = { handleInputs }
    required >
        <
        option value = "" > Select Category < /option> <
    option value = "Thai" > Thai < /option> <
    option value = "American" > American < /option> <
    option value = "Chinese" > Chinese < /option> <
    option value = "Mexican" > Mexican < /option> <
    option value = "Indian" > Indian < /option> < /
    select > <
        /div>

    { /* Recipe Image */ } <
    div className = "mb-3" >
        <
        label htmlFor = "Recipe_Image"
    className = "form-label" >
        Recipe Image <
        /label> <
    input type = "file"
    className = "form-control"
    id = "Recipe_Image"
    name = "Recipe_Image"
    accept = "image/*"
    onChange = { handleInputs }
    required /
        >
        <
        /div>

    { /* How to Make */ } <
    div className = "mb-3" >
        <
        label htmlFor = "How_to_make"
    className = "form-label" >
        How to Make <
        /label> <
    textarea className = "form-control"
    id = "How_to_make"
    name = "How_to_make"
    rows = "4"
    value = { formData.How_to_make }
    onChange = { handleInputs }
    required >
        <
        /textarea> < /
    div >

        <
        button type = "submit"
    className = "btn btn-primary"
    onClick = { PostData } >
        Submit Recipe <
        /button> < /
    form > <
        /div> < /
    div > <
        /div> < /
    div > <
        /div>
);
};

export default Create;