import React from 'react';
import "./Style.css";



const Home = () => {
    const imageUrl1 = 'https://x.yummlystatic.com/web/img-fruit-bowl.png';
    const imageUrl2 = 'https://x.yummlystatic.com/web/strawberry-grain.png';
    const imageUrl3 = 'https://x.yummlystatic.com/web/img-strawberry.png';
    return ( <
        >
        <
        div className = "container1" >
        <
        img src = { imageUrl2 }

        alt = "Description of the image" / >

        <
        img src = { imageUrl1 }
        className = "img1"
        alt = "Description of the image" / >
        <
        img src = { imageUrl3 }
        className = "img2"
        alt = "Description of the image" / >
        <
        /div >


        <
        form className = "temp_form" >
          <h1 > Find a Recipe < /h1> 
        <
        input type = "text"
        id = "RecipeName"
        placeholder = "Enter Recipe name.."
        autoComplete = "off" / >

        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "30"
        height = "30"
        fill = "currentColor"
        class = "bi bi-search"
        viewBox = "0 0 16 16" >
        <
        path d = "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" / >
        <
        /svg> < /
        form >

        <
        />
    );
};

export default Home;